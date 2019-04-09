const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Photo = require('../database/models/Photo.js');

const sendPhotos = (req, res) => {
  Photo.retrievePhotos(req.params.id, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(results)
      res.type('json').send(results);
    }
  });
};

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/rooms/:id',  (req, res) => {
  Photo.getRoomPhotos(req.params.id, (error, results) => {
    if (results.length === 0) {
      res.status(500).end();
      return;
    }
    res.type('json').send(results);
  });
});
module.exports = app;
