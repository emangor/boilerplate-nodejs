var express = require('express');
module.exports.express = express;
var app = express();
module.exports.app = app;
var routes = require('./routes');
var microserviceName = 'boilerplate';

require('http').globalAgent.maxSockets = Infinity;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
// default to dev if NODE_ENV is not present
process.env.NODE_ENV = (process.env.NODE_ENV || 'development');

var port = process.env.PORT || 3000;
var host = '0.0.0.0';
console.log(microserviceName + ' is listening on port: ' + port);

app.listen(port, host);

// now that we are listening, activate the routes..
require('./routes');




