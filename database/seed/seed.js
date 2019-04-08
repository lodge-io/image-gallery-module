const faker = require('faker');
const db = require('../index.js'); // start db connection
const model = require('../models/Photo.js');

// aws.config.update({
//   region: 'us-west-2'});


// let s3 = new aws.S3();

// let data = {
//   // fill in Bucket information here
//   Bucket: ''
// };


function createPhotos(id) {
  const photos = [];
  const photoCount = Math.floor(Math.random() * 20) + 1;

  for (let j = 1; j <= photoCount; j += 1) {
    const randomImgId = Math.floor(Math.random() * 100) + 1;

    const photo = {
      id,
      photoId: j,
      url: `https://s3-us-west-1.amazonaws.com/hrsf-fec/img${randomImgId}.jpg`,
      description: faker.lorem.sentence(),
    };

    photos.push(photo);
  }

  return photos;
}

function createRooms() {
  const roomPhotos = [];

  for (let i = 1; i <= 100; i += 1) {
    const id = i;
    const photos = createPhotos(id);
    roomPhotos.push(...photos);
  }

  model.Photo.create(roomPhotos)
    .then(() => db.close());
}

createRooms();
