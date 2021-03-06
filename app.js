var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongodb = require('./mongoose');

mongodb.init();

var brands = require('./routes/brands/brandsRoutes');
var brandDetails = require('./routes/brandDetails/brandDetailsRoutes');
var cars = require('./routes/cars/carsRoutes');
var colors = require('./routes/colors/colorsRoutes');
var highlights = require('./routes/highlights/highlightsRoutes');
var home = require('./routes/home/homeRoutes');
var models = require('./routes/models/modelsRoutes');
var modelDetails = require('./routes/modelDetails/modelDetailsRoutes');
var variants = require('./routes/variants/variantsRoutes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
        next();
    } else {
        mongodb.init(() => {
            next();
        }, next);
    }
});

app.use('/cars', cars);
app.use('/brands', brands);
app.use('/api/brandDetails', brandDetails);
app.use('/api/highlights', highlights);
app.use('/api/home', home);
app.use('/api/models', models);
app.use('/api/modelDetails', modelDetails);
app.use('/api/variants', variants);
app.use('/colors', colors);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
