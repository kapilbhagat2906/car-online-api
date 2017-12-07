let mongoose = require('mongoose'),
    bluebirdPromise = require('bluebird'),
    dbInstance = null,
    options = {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
    };

mongoose.Promise = bluebirdPromise;

mongoose.connect('mongodb://localhost/carOnlineDB', options)
    .then(
        ()=> {
            console.log('DB connection successful');
        },
        (err) => {
            console.log('DB connection error:- ' + err.message);
        }
    );

dbInstance = mongoose.Connection;

exports = dbInstance;