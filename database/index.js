const mongoose = require('mongoose');

// To Connect to MongoDB Atlas Cluster
// const mongoUri = 'mongodb+srv://lodge:lodge2019@cluster0-s6qhj.mongodb.net/test?retryWrites=true'

const dbUri = 'mongodb://localhost:27017/lodge';
mongoose.connect(dbUri, { useNewUrlParser: true });


const db = mongoose.connect(dbUri, { useNewUrlParser: true }, () => {
    console.log('Connected to MongoDB!');
});

// db.on('error', error => console.error('Error. Having trouble connecting. Error Message:', error));
// db.once('open', () => console.log('Connected to MongoDB! The MongoURI is:', mongoUri));

module.exports = db;
