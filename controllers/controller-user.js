var logger = require('../utils/logger');
var userModel = require('.././models/model-user');

// user controller
module.exports.getUser = function(req, res, callback){
  var username = req.params.username;
  logger.debug('in getUser username: ' + username);
  userModel.getUser(username, function(err, response){
    if(err){
      logger.error('getUser error: ' + err);
      res.status(500).json({status:'error', message:err, statusCode: 500});
    } else {
      res.status(200).json(response);
    }
  });
} 