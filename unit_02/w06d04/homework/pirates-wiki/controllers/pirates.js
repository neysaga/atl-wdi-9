//your code below
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', function(req, res) {
	res.render('pirates/index', {
		pirates: pirates
	});
});

router.get('/new', function(req, res) {
	res.redner('pirates/new');
});

router.post('/', function(req, res){
	res.render('pirate/new');
});

router.post('/', function(req, res){
	var newPirate = {
		name:req.body.name,
		birthplace:req.bodybirthplace,
		death_year: req.body.death_year,
		base:req.body.base,
		nickname:req.body.birthplace
	};
	pirates.histricPirates.push(newPirate);
	res.redirect('/pirates');

});

routher.get('/:id', function(req, res){
	var pirate = pirates.historicPirates[req.params.id];

	res.render('pirates/show', {
		pirate: pirate
	});
});
//all routes for /pirate
// router.get(.......)
// router.post(......)
// ....etc

//exports
module.exports = router;
