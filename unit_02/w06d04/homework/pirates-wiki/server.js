var express = require('express');
var app = express()

var hbs = require('hbs');
app.set('view engine', 'hbs');

var piratesController = require('./controllers/pirates_controller.js');
app.use("/pirates", piratesController);

var port = 3000;
app.listen(port);

//this is the minimum thing you need to start a server
