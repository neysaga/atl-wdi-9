var express = require('express');
var app = express();
var hbs = require('hbs');

var toDontsController = require('./controllers/todonts_controller.js');
app.use('/todonts', toDontsController);

app.listen(3000);

