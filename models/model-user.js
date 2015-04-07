var logger = require('../utils/logger');

/* sample model method
/* do the method work in here
*/
module.exports.getUser = function(username, callback){
    logger.info('in model getUser username = ' + username);
    callback(null, username);
}            
