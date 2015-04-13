"use strict";
/**
 * Creation of the server and linking the routes to sub scripts.
 * 
 * Handles also the session and restricts the access to endpoints.
 */
var express = require('express');
var bodyParser = require('body-parser');
var logger = require("./util/logger")('agent-server');

var port = 12010;

var app = express();
app.listen(port);
logger.info('Started on port ' + port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.use('/rf', require('./services/rf-service'));