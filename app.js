var config = require( './config' );
var express = require('express');
module.exports.express = express;
var app = express();
module.exports.app = app;
var routes = require('./routes');
var logger = require('./utils/logger');
app.listen(config.port);
logger.info(config.serviceName + ' is listening on port: ' + config.port);