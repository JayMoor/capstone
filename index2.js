const express = require('express');
const { Client } = require('pg');
const app = express();
const PORT = 8080;

app.use(express.json());

// PostgreSQL client setup
const db = new Client({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432, // Change it according to your PostgreSQL configuration
});

// Connect to the database
db.connect()
    .then(() => console.log('Connected to the PostgreSQL database'))
    .catch(err => console.error('Error connecting to the PostgreSQL database', err));

// Ensure the "albums" table exists with a serial (auto-incrementing) primary key
db.query(`
    CREATE TABLE IF NOT EXISTS albums (
        id SERIAL PRIMARY KEY,
        album TEXT,
        artist TEXT,
        producer TEXT,
        releaseDate TEXT,
        genre TEXT,
        dateAdded TEXT
    )
`);


app.listen(
    PORT,
    () => console.log(`Server is here on http://localhost:${PORT}`)
);


app.get('/albums', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM albums');
        res.status(200).send(result.rows);
    } catch (error) {
        console.error('Error fetching albums from the database', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.post('/albums', async (req, res) => {
    const { album, artist, producer, releaseDate, genre, dateAdded } = req.body;

    if (!album) {
        res.status(400).send({ message: 'Album name is required.' });
        return;
    }

    try {
        const result = await db.query(
            'INSERT INTO albums (album, artist, producer, releaseDate, genre, dateAdded) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
            [album, artist, producer, releaseDate, genre, dateAdded]
        );


const insertedId = result.rows[0].id;

    res.status(201).send({
        id: insertedId,
        album,
        artist,
        producer,
        releaseDate,
        genre,
        dateAdded
        });
    } catch (error) {
        console.error('Error inserting album into the database', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});