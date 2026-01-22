const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

// @desc    Database connection state
let _db;

// @desc    Initialize Mongoose connection to MongoDB
const initDb = (callback) => {
    if (_db) {
        console.log('Database is already initialized!');
        return callback(null, _db);
    }

    // Mongoose connection options are handled internally in modern versions
    mongoose
        .connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            console.log('Connected to MongoDB via Mongoose');
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

// @desc    Get the active connection (if needed for other libraries)
const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb
};