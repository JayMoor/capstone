const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require(('jsonwebtoken'))

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/users', async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    // res.json(users);
    if (!users) res.send([])
    res.send(users)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/auth/register", async (req, res, next) => {
  let { username, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });

    if (user) {
      return res.status(409).send({ message: "User already exists" });
    }

    password = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        username,
        password,
      },
    });

    delete newUser.password
    const token = jwt.sign(newUser, process.env.JWT_SECRET_KEY);
    res.send({token, newUser});
  } catch (error) {
    next(error);
  }
});

app.get('api/auth/me', async (req, res, next) =>{
 
  console.log(req.headers)
  const {Authorization} = req.headers
  const token = Authorization.slice(7)

  const {username} = jwt.verify(token, process.env.JWT_SECRET_KEY)
  // get the user where the username matches
  const user = await prisma.users.findUnique({where: {username}})
   if (!user) res.status(404).send({message:"no user"})
  res.send(user);
});

app.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const hashedPass = await bcrypt.hash(password, 10)
    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(409).send({ message: "User does not exist" });
    }

    const isUser = await bcrypt.compare(hashedPass, user.password)
    
    if (!isUser) {
      res.status(401).send({message: "incorrect password"})
    }
    // successfully logged in!
   
    delete user.password
    const token = jwt.sign(user, process.env.JWT_SECRET_KEY);

    res.send({token, user});
  } catch (error) {
    next(error);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.get('/api/users', async (req, res) => {
//     try {
//       const users = await prisma.users.findMany();
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });
  
  
  app.get('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const user = await prisma.users.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  app.post('/api/users', async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const newUser = await prisma.users.create({
        data: { username, email, password },
      });
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  
  app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
      const updatedUser = await prisma.users.update({
        where: { id: parseInt(id) },
        data: { username, email, password },
      });
  
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  app.delete('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await prisma.users.delete({
        where: { id: parseInt(id) },
      });
  
      res.json(deletedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  app.get('/api/album', async (req, res, next) => {
    try {
      const album = await prisma.album.findMany();
      // res.json(album);
      if (!album) res.send([])
      res.send(album)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });