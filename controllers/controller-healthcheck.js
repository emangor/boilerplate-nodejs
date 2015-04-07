var package = require('.././package');

module.exports.healthcheck = function(req, res, next){
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    name: package.name, 
    version: package.version
  });  
}