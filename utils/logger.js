// logger.js
var bunyan = require('bunyan');
var package = require('.././package');
var appName = package.name;

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  }
}

var logger = bunyan.createLogger({
	name: appName, 
	serializers: {
		req: reqSerializer
	},
  streams: [
    {
      level: 'info',
      stream: process.stdout      
    }
  ]
});

module.exports = logger;