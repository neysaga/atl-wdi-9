//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require('express');
var router = express.Router();
var pokemon = require('../models/poke_array.js');
// Set express Router to a variable called router:

// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)
router.get('/', function(req, res) {
	res.render('index.hbs', {
		pokemon: pokemon
	});
});

router.get('/:id', function(req, res) {
	res.render('show.hbs', {
		pokemon: pokemon[req.params.id]
	});
});


// Require the poke_array.js file here from models.
// Save it to a variable called data:


module.exports = router;

//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images





// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.




// Make a GET route '/new' that will simply render a form to create a new Pokemon







//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon


//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
