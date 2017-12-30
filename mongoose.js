let mongoose = require('mongoose'),
    bluebirdPromise = require('bluebird'),
    mongodbCon = null,
    options = {
        useMongoClient: true,
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
    },
    config = require("./config");

mongoose.Promise = bluebirdPromise;

let init = (successCallback, errorCallback) => {
    mongoose.connect(config.mongodb.connectionString, options)
    .then(
        ()=> {
            console.log('DB connection successful');
            mongodbCon = mongoose.Connection;
            successCallback && successCallback();
        },
        (err) => {
            console.log('DB connection error:- ' + err.message);
            errorCallback && errorCallback(err);
        }
    );
};

let disconnect = () => {
    mongoose.disconnect((error) => {
        if(error) {
            console.log(error);
            return;
        }
        console.log('DB disconnected');
    });
};


module.exports = {init, mongodbCon, disconnect};