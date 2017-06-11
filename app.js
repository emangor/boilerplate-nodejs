var config = require( './config.js' );
var express = require('express');
module.exports.express = express;
var app = express();
module.exports.app = app;
var routes = require('./routes');
app.listen(config.port);
console.log(config.serviceName + ' is listening on port: ' + config.port);