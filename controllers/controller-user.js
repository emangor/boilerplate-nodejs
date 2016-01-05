var userModel = require('.././models/model-user');

// user controller
module.exports.getUser = function(req, res, callback){
  var username = req.params.username;
  console.log('in getUser username = ' + username);
  userModel.getUser(username, function(err, response){
    if(err){
      console.log('errror = ' + err);
      res.json(500, {status:'error', message:err, statusCode: 500});
    } else {
      res.json(200, response);
    }
  });
} 