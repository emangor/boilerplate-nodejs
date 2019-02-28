const logger = require('../utils/logger');

//sample model method
module.exports.getUser = (username) => {
    logger.log(`debug`, `in model getUser username: ${username}`);
    // to throw error use :
    // throw new Error("This is my error");
    return username;
}
