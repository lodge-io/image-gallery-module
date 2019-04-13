const mongoose = require('mongoose');
require('dotenv').config();

// To Connect to MongoDB Atlas Cluster
// const mongoUri = 'mongodb+srv://lodge:lodge2019@cluster0-s6qhj.mongodb.net/test?retryWrites=true'

// const mongoUri = 'mongodb://172.18.0.3:27017/lodgeTESTING';
// const mongoUri = `mongodb+srv://lodge:${process.env.DB_PASSWORD}@cluster0-s6qhj.mongodb.net/test?retryWrites=true`;
const mongoUri = `mongodb://lodge:${process.env.DB_PASSWORD}@stitch.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=lodge-ngnzc:get:local-userpass`;
mongoose.connect(mongoUri, { useNewUrlParser: true });



const db = mongoose.connect(mongoUri, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB!');
});

// db.on('error', error => console.error('Error. Having trouble connecting. Error Message:', error));
// db.once('open', () => console.log('Connected to MongoDB! The MongoURI is:', mongoUri));

module.exports = db;



