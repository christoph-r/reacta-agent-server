"use strict";

var express = require('express');
var router = express.Router();
var logger = require("../util/logger")('rf-service');

module.exports = router;

/**
 * Load user by id
 * 
 * @returns user object
 */
router.post('/updateGps', function(req, res) {
    res.type('application/json');

});

/**
 * Returns a list with all users.
 * 
 * @returns user objects
 */
router.post('/getAll', function(req, res) {
    res.type('application/json');

    var body = req.body;
    
    logger.info(body);
    
    var userList = [1,2,3,4,5,6];
    
    var ret = new Object();
    ret.status = 200;
    ret.body = userList.concat(body);
    res.json(ret);
});