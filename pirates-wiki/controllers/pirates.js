//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//for root vampire page
router.get('/', function(req, res){
	res.render("index.ejs", {
		pirates: pirates
	});
});

//==============================
// CREATE
//==============================

router.get('/new', function(req, res){
	res.render("new.ejs");
});

//this is for posting new pirates
router.post('/', function(req, res){

	//push req.body into the pirates array
	pirates.push(req.body);
	//redirect back to main pirates page when done
	res.redirect('/pirates');
});

//this is for each vampire page
router.get('/:id', function(req, res){

	var id = req.params.id;

	res.render("show.ejs", {
		pirates: pirates[id-1]
	})
})



//==============================
// EXPORTS
//==============================

module.exports = router;
