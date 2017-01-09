//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");


//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//this is for public static files
app.use(express.static('public'));

//===========================
// CONTROLLERS
//===========================

//for root directory
app.get('/', function(req, res){
	res.send("Hey It works!");
});

//for /pirates
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("listening");
});
