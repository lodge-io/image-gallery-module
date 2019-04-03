const mongoose = require('mongoose');


const dbURL = 'mongod://localhost:27017/lodge';


//  Connecting to a database
// mongoose.connect(dbURL, () => {
//     console.log('CONNECTED');
// });
// const db = mongoose.connection; 
// db.on('error', err => console.error(`An error has occured: ${err}`));

// // Upon success
// db.once('open', () => console.log( `Database connected on ${dbURL}`));

module.exports = {
  database: 'mongodb://localhost/lodge'
};