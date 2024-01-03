const { faker } = require ('@faker-js/faker'); //make sure you install faker, dummy
const { PrismaClient } = require ("@prisma/client");
const { name } = require('faker/lib/locales/az');
const prisma = new PrismaClient();

const genres = ["ROCK", "RAP", "COUNTRY", "KPOP", "HIPHOP", "RNB"];
const ratingOptions = ["Half", "One", "OneAndHalf", "Two", "TwoAndHalf", "Three", "ThreeAndHalf", "Four", "FourAndHalf", "Five"]
// enum Rating {
//   Half //0.5
//   One //1.0
//   OneAndHalf //1.5
//   Two //2.0
//   TwoAndHalf //2.5
//   Three //3.0
//   ThreeAndHalf //3.5
//   Four //4.0
//   FourAndHalf  //4.5
//   Five //5.0
// }

async function seed() {
  try {
    for (let i = 0; i < 50; i++) {
      const albumName = faker.music.songName();
      const description = faker.commerce.productDescription();
      const artist = faker.person.firstName();
      const genre = genres[Math.floor(Math.random() * genres.length)];
      const releaseDate = faker.date.past();
      const imageUrl = faker.image.urlLoremFlickr({ category: 'music,albumart' });

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
      })}
      const users = await prisma.users.findMany();
      console.log(users);

    for (let i = 0; i < 50; i++) {
      const id = Number(String(Date.now()).substring(0,8))+i; 
      const user = users[Math.floor(Math.random() * users.length)].name;
      const body = faker.lorem.paragraphs();
      const rating = ratingOptions[Math.floor(Math.random() * ratingOptions.length)];
      const album = albums[Math.floor(Math.random() * albums.length)].name;

      await prisma.review.create({
        data: {
          id,
          user,
          body,
          rating,
          album,
        }
      })}
    const reviews = await prisma.review.findMany();
    console.log(reviews);

  } catch (error) {
    console.log(error);
  }
}

seed();