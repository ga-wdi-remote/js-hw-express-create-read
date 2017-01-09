//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each vampire page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});

//==============================
// CREATE
//==============================
//this is for posting new pirates
router.post('/', function(req, res){

	//push req.body into the pirates array
	pirates.push(req.body);
	//redirect back to main pirates page when done
	res.redirect('/pirates');
});





//==============================
// EXPORTS
//==============================

module.exports = router;
