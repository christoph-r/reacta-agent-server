"use strict";
/**
 * Configuarable logger implementation
 */
var log4js = require('log4js');
log4js.configure({
    appenders : [ {
	type : 'console'
    }
    /*
     * , { type : 'file', filename : 'log/cta.log' }
     */
    ]
});

module.exports = getLogger;

/**
 * Returns the logger for the given name
 * 
 * @return {Function}
 * @api public
 */
function getLogger(name) {
    var logger = log4js.getLogger(name);
    // logger.setLevel('ERROR');
    return logger;
}
