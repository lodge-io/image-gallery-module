const express = require('express');
const controller = require('./../controllers');

const router = express.Router();

router.get('/rooms/:id/photos/', controller.photos.index);

router.use(function(req, res, next) {
  res.status(404).send('Sorry, the page you are looking for was not found.');
});

module.exports = router;
