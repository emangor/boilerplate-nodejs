/* sample model method
/* do the method work in here
*/
module.exports.getUser = function(username, callback){
    console.log('in model getUser username = ' + username);
    callback(null, username);
}            
