const logger = require('../utils/logger');
const userModel = require('.././models/model-user');

// user controller
module.exports.getUser = (req, res) => {
    let username = req.params.username;
    logger.debug(`in getUser username: ${username}`);
    userModel.getUser(username, function(err, response){
        if(err){
            logger.error(`getUser error: ${err}`);
            res.status(500).json({status:'error', message:err, statusCode: 500});
        } else {
            res.status(200).json(response);
        }
    });
} 