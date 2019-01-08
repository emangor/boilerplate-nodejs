const logger = require('../utils/logger');

//sample model method
module.exports.getUser = (username, callback) => {
    logger.log(`debug`, `in model getUser username: ${username}`);
    callback(null, username);
}
