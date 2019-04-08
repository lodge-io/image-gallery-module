const mongoose = require('mongoose');
const db = require('../index');
mongoose.Promise = global.Promise;

//  Schema 
var photoSchema = new mongoose.Schema({
  id: Number,
  photoId: Number,
  url: String,
  caption: String,
});




// const roomSchema = new mongoose.Schema({
//   roomNum: Number,
//   photoNum: Number,
//   description: String,
//   url: String,
// });

// const descriptionSchema = new mongoose.Schema({
//   photoID: Number,
//   listingID: Number,
//   imageURL: String,
//   picCaption: String,
// });
var Photo = mongoose.model('Photo', photoSchema);

//create a function that fetches information from the database and invokes a callback on it
const retrievePhotos = (id, callback) => {
  Photo.find({'id': id}, (err, room) => {
    if (err) {
      callback(err, null);
    } else {
      console.log('Retrieving photos from MongoDB');
      callback(null, room);
    }
  });
};

function getRoomPhotos(id, callback) {
  Photo.find()
    .where('id').equals(id)
    .exec(callback);
}




module.exports = { Photo, retrievePhotos, getRoomPhotos };

// router.get('/:id', controller.sendPhotos)


