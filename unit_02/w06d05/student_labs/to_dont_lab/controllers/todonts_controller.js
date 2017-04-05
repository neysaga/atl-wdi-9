var express = require('express');
var router = express.Router();
var toDonts = require('../data.js');

module.exports = router;

router.get('/', function(req, res){
	res.render('index.hbs', {
		toDonts: toDonts.seededToDonts
	});
});

router.get('/:id', function(req, res){
	var toDontSingle = toDonts.seededToDonts[req.params.id];
	res.render('show.hbs', {
		toDontSingle: toDontSingle
	});
});


//index route

//show route

//create route

//edit route, put, view

//delete route
