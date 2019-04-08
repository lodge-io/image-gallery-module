const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Photo = require('../database/models/Photo.js');

// import retrievePhotos  from '../database/models'

// const model = require('../database/models/Room.js');
const app = express();
// const config = require('../database/index');

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));

//maybe use public folder?
app.use('/rooms/:id', express.static(__dirname + '/../client/dist'));

// http://localhost:8000/rooms/1/?1/photos
app.get('/rooms/:id/photos', (req, res) => {
  // db.collection('photo').find({ id: req.params.id }).exec(((err, photos) => {
  //   res.send(photos);
  // }));
  // db.collection('photo').find({ id: req.params.id }).exec(((err, photos) => {
  //   res.send(photos);
  // }));
  Photo.getRoomPhotos(req.params.id, (error, results) => {
    if (results.length === 0) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
  // db.retrievePhotos(req.params.id, (err, data) => {
  //   if (err) {
  //         console.log(err);
  //       } else {
  //         res.send(data);
  //       }
  // });
  // Photo.getAll(req.params.homeId, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

// var db;
// mongoose.connect(config.database);
// var db = mongoose.connection;
// // mongoose.connect(dbUrl, (err, databaseConnection) => {
// //     if (err) console.error(err);
// //     db = databaseConnection.db('lodge');
// // });

// const app = express();
// app.set('port', process.env.PORT || 3012);

// app.use(express.json());

// app.get('/', (req, res) => {
//   // mongoose.connect(dbUrl, (err, databaseConnection) => {
//       // if (err) console.error(err);
//   //     db = databaseConnection.db('lodge');

//   // });
//   // db.collection('rooms').find({}).toArray((queryError, results) => {
//   //   if (queryError) {console.error(queryError);}
//   //   console.log(results);
//   //   res.json(results);
//   // });
//   res.redirect('./client/dist/index.html');
// });

// app.listen(app.get('port'), () => {
//   console.log(`Server started: http://localhost:${app.get('port')}/`);
// });

module.exports = app;
