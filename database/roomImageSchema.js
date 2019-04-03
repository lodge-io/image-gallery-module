var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var samples = require('./seed');
// var mongoUri = 'mongodb://localhost/lodge';
var Schema = mongoose.Schema;
const dbURL = 'mongod://localhost/lodge';


mongoose.Promise = global.Promise;


//  Schema 
var roomSchema = mongoose.Schema({
  id: Number,
  imageAndDescription: [
    {
      imgUrl: String,
      description: String
    }
  ]
  // imageUrl: String,
  // description: String
});


// var db = mongoose.connection.on('connected', () => {
//     console.log('MONGOOSE DEFAULT CONNECTION IS OPEN');
// })
var db = mongoose.connection;
var Room = module.exports = mongoose.model('Room', roomSchema);