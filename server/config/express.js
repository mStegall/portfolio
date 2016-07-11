var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser')


module.exports = function (app, config) {
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    
    // Logging
    if (process.env.NODE_ENV != 'production') {
        app.use(morgan('dev'));
    };  

    // Enable Gzip Compression
    app.use(compression());

    // Serve Statics
    app.use(express.static('public'));
    
};
