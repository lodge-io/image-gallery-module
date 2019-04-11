const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Photo = require('../database/models/Photo.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/rooms/:id', (req, res) => {
  Photo.getRoomPhotos(req.params.id, (error, results) => {
    if (error) {
      console.error('Sorry, this HTTP request has failed:', error);
    }
    if (results.length === 0) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
});

module.exports = app;
