var express = require("express");
var router = express.Router();

var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function (req, res) {
	res.render('index.hbs', {
		pirates: piratesArray
	});
	//this grabs the list of pirates. We already have the object list 
	//and a variable for it on this document
	//this knows to go into the views folder and find the specific file
});

//exports
module.exports = router;
//this line is throwing this file up before you catch it