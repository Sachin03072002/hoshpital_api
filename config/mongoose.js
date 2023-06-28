const mongoose = require('mongoose');
const DB = 'mongodb://127.0.0.1:27017/hospital';
mongoose.connect(DB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error in connecting to the database'));
db.once('open', function () {
    console.log('Successfully connected to the database: MongoDb');

});
module.exports = db;