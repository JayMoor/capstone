const { faker } = require ('@faker-js/faker'); //make sure you install faker, dummy
const { PrismaClient } = require ("@prisma/client");
const { name } = require('faker/lib/locales/az');
const prisma = new PrismaClient();

const genres = ["ROCK", "RAP", "COUNTRY", "KPOP", "HIPHOP", "RNB"];

async function seed() {
  try {
    for (let i = 0; i < 50; i++) {
      const albumName = faker.music.songName();
      const description = faker.commerce.productDescription();
      const artist = faker.person.firstName();
      const genre = genres[Math.floor(Math.random() * genres.length)];
      const releaseDate = faker.date.past();
      const imageUrl = faker.image.urlLoremFlickr();

      await prisma.album.create({
        data: {
          name: albumName,
          description,
          artist,
          genre,
          release_date: releaseDate,
          imageURL: imageUrl,
        },
      });
    }
      const albums = await prisma.album.findMany();
      console.log(albums);

    for (let i = 0; i < 50; i++) {
      const id = Number(String(Date.now()).substring(0,8))+i; 
      const username = faker.person.firstName();
      const email = faker.internet.email();
      const name = faker.person.firstName();
      const password = faker.internet.password();

      await prisma.users.create({
        data: {
          id,
          username,
          email,
          name: name,
          password,
        }
      })
      const users = await prisma.users.findMany();
      console.log(users); }


  } catch (error) {
    console.log(error);
  }
}

seed();