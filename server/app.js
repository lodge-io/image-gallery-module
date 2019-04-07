const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// const cors = require('cors');
const dbUrl = 'mongod://localhost/lodge';
const config = require('../database/index');

var db;
mongoose.connect(config.database);
var db = mongoose.connection;
// mongoose.connect(dbUrl, (err, databaseConnection) => {
//     if (err) console.error(err);
//     db = databaseConnection.db('lodge');
// });

const app = express();
app.set('port', process.env.PORT || 3012);

app.use(express.json());

app.get('/', (req, res) => {
  // mongoose.connect(dbUrl, (err, databaseConnection) => {
      // if (err) console.error(err);
  //     db = databaseConnection.db('lodge');

  // });
  // db.collection('rooms').find({}).toArray((queryError, results) => {
  //   if (queryError) {console.error(queryError);}
  //   console.log(results);
  //   res.json(results);
  // });
  res.redirect('./client/dist/index.html');
});

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`);
});
  