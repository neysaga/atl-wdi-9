var express = require('express');
var app = express();
var hbs =require('hbs');

//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:

app.get('/', function (req, res) {
  res.send('hello world')
});

app.listen(3000)

//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set('view engine', 'hbs');

//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')

var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);



//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
