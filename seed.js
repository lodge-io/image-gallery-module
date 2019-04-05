const mongoose = require('mongoose');
const faker = require('faker');
const schema = mongoose.schema;
mongoose.connect('mongodb://localhost:27017/lodge');


const generateId = function () {
    //faker.seed(100);
    var id = faker.fake("{{random.number}}");
    return id;
};

const generateroom_id = function () {
    //faker.seed(300);
    var room_id = faker.fake("{{random.number}}");
    return room_id;
};

const generateImageUrl = function () {
    var photo_url = faker.fake("{{image.imageUrl}}");
    return photo_url;
};

const generateDescription = function () {
    var description = faker.fake("{{lorem.sentence}}");
    return description;
};

// const generateImageCount = function () {
//     //faker.seed(1000);
//     var imageCount = faker.fake("{{random.number}}");
//     return imageCount;
// }
//var secondRandom = faker.random.number();

let documentList = [];

const populateData = function () {
    for (var i = 0; i < 100; i++) {
        var image = {
            id: generateId(),
            room_id: generateroom_id(),
            photo_url: generateImageUrl(),
            description: generateDescription(),
        };
        documentList.push(image);
    }
};
populateData();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to DB through Mongoose!");
});

//define image schema
var imageSchema = mongoose.Schema({
    id: Number,
    room_id: Number,
    photo_url: String,
    description: String,
});

//compile the schema into a model

var Image = mongoose.model('Image', imageSchema);

let saveList = (documentList, cb) => {
    for (var i = 0; i < documentList.length; i++) {
        const newImg = new Image({
            id: documentList[i].id,
            room_id: documentList[i].room_id,
            photo_url: documentList[i].photo_url,
            description: documentList[i].description,
        });
        newImg.save(cb);
    }
};

saveList(documentList, (err, image) => {
    if (err) {
        console.log(err);
    } else {
        console.log('image', image);
    }
});

let find = (callback) => {
    Image.find({}).sort('-size').limit(5).exec(callback);
};

module.exports.saveList = saveList;
module.exports.documentList = documentList;
module.exports.find = find;


// var Room = require('./roomImageSchema');
// // var db = require('./index.js');
// var mongoose = require('mongoose');
// const dbURL = 'mongod://localhost:27017/lodge';
// const config = require('./index');


// // //  Connecting to a database
// // mongoose.connect(dbURL, () => {
// //     console.log('CONNECTED');
// // });
// mongoose.connect(config.database);
// var db = mongoose.connection;

// mongoose.connection.on('error', err => console.error(`An error has occured: ${err}`));

// // Upon success
// mongoose.connection.once('open', () => console.log( `Database connected on ${dbURL}`));



// var samples = [
//   { 'id': 1,
//     'imageAndDescription': [
//       {
//         'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/bedroom.jpeg',
// 		'description': 'room1'
//       }
//     ]
//   },
//   { 'id': 2,
//     'imageAndDescription': [
//       {
//         'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1505693416388-ac5ce068fe85.jpeg',
//         'description': 'room2'
//       }
//     ]
			
//   },
//   { 'id': 3,
//     'imageAndDescription': [
//       {
//         'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1522771739844-6a9f6d5f14af.jpeg',
//         'description': 'room3'
//       }
//     ]
			
//   },
//   { 'id': 4,
//     'imageAndDescription': [
//       {
//         'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1538944495092-48fff71fbb0c.jpeg',
//         'description': 'room4'
//       }
//     ]
			
//   },
//   { 'id': 5,
//     'imageAndDescription': [
//       {
//         'imgUrl': 'https://s3-us-west-1.amazonaws.com/lodge.io/photo-1540518614846-7eded433c457.jpeg',
//         'description': 'room5'
//       }
//     ]
			
//   }
// ];

// // var sample =  {   
// //     "id": 1,
// //     "imgUrl": "https://s3-us-west-1.amazonaws.com/lodge.io/photo-1540518614846-7eded433c457.jpeg",
// //     "description": "room2"
// // };


// // db.on('error', console.error.bind(console, 'connection error:'));
// // db.once('open', function() {
// //   // we're connected!
// //   console.log('Connected to MongoDB')
// // });


// const insertSample = function() {
//   Room.create(samples)
//     .then(() => db.disconnect);
//   //   .then(() => {
//   //     Room.save((err, room) => {
//   //         if (err) console.error(err);
//   //         else {
//   //             console.log('SEEDED!!!', room);
//   //         }
//   //     });
//   //     db.disconnect();
//   // console.log('LOGGING OUTER SECTION');
 
// };

// insertSample();




