var config = require('../config');
var winston = require('winston');

//timestamp for logger
var tsFormat = () => (new Date()).toLocaleTimeString();
var logger = new(winston.Logger)({
    transports: [
        // add colors and timestamp
        new(winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
        })
    ]
});
logger.cli();
// logger level is set in the config
logger.level = config.loggerLevel;

module.exports = logger;