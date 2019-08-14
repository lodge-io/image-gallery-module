const mongoose = require('mongoose');
const db = require('../index');
mongoose.Promise = global.Promise;

const photoSchema = new mongoose.Schema({
  title: String,
  isVerified: Boolean,
  photoUrl: String,
  thumbnailUrl: String,
  listingId: Number,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;


// const mongoose = require('mongoose');
// const db = require('../index');
// mongoose.Promise = global.Promise;

// //  Schema 
// var photoSchema = new mongoose.Schema({
//   id: Number,
//   photoId: Number,
//   url: String,
//   description: String,
// });

// var Photo = mongoose.model('Photo', photoSchema);

// //create a function that fetches information from the database and invokes a callback on it
// const retrievePhotos = (id, callback) => {
//   Photo.find({'id': id}, (err, room) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       console.log('Retrieving photos from MongoDB');
//       callback(null, room);
//     }
//   });
// };

function getRoomPhotos(id, callback) {
  Photo.find()
    .where('id').equals(id)
    .exec(callback);
}


// module.exports = { Photo, retrievePhotos, getRoomPhotos };



