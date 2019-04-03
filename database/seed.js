var Room = require('./roomImageSchema');
// var db = require('./index.js');
var mongoose = require('mongoose');
const dbURL = 'mongod://localhost:27017/lodge';
const config = require('./index');


// //  Connecting to a database
// mongoose.connect(dbURL, () => {
//     console.log('CONNECTED');
// });
mongoose.connect(config.database);
var db = mongoose.connection;

mongoose.connection.on('error', err => console.error(`An error has occured: ${err}`));

// Upon success
mongoose.connection.once('open', () => console.log( `Database connected on ${dbURL}`));



var samples = [
  { 'id': 1,
    'imageAndDescription': [
      {
        'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/bedroom.jpeg',
		'description': 'room1'
      }
    ]
  },
  { 'id': 2,
    'imageAndDescription': [
      {
        'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1505693416388-ac5ce068fe85.jpeg',
        'description': 'room2'
      }
    ]
			
  },
  { 'id': 3,
    'imageAndDescription': [
      {
        'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1522771739844-6a9f6d5f14af.jpeg',
        'description': 'room3'
      }
    ]
			
  },
  { 'id': 4,
    'imageAndDescription': [
      {
        'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1538944495092-48fff71fbb0c.jpeg',
        'description': 'room4'
      }
    ]
			
  },
  { 'id': 5,
    'imageAndDescription': [
      {
        'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1540518614846-7eded433c457.jpeg',
        'description': 'room5'
      }
    ]
			
  }
];

// var sample =  {   
//     "id": 1,
//     "imgUrl": "https://s3-us-west-1.amazonaws.com/lodge.io/photo-1540518614846-7eded433c457.jpeg",
//     "description": "room2"
// };


// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('Connected to MongoDB')
// });


const insertSample = function() {
  Room.create(samples)
    .then(() => db.disconnect);
  //   .then(() => {
  //     Room.save((err, room) => {
  //         if (err) console.error(err);
  //         else {
  //             console.log('SEEDED!!!', room);
  //         }
  //     });
  //     db.disconnect();
  // console.log('LOGGING OUTER SECTION');
 
};

insertSample();




