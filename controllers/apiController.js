var Item = require('../models/items');
var User = require('../models/user');
var Submission = require('../models/submission')
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	/////////////////// WORKING ON item.image ////////////////////
	postItem: function(req, res) {
		var item = new Item({
			name: req.body.name,
			type: req.body.type,
			lengt: req.body.lengt,
			width: req.body.width,
			height: req.body.height,
			price: req.body.price,
			location: req.body.location,
			description: req.body.description,
			image: req.body.image
		});
		var file = req.files.file;
		console.log("user " + " fs submitting ", file);
		var uploadDate = new Date();
		var tempPath = file.path;
		var targetPath = path.join(__dirname, "../uploads/" + uploadDate + file.name);
		var savePath = "/uploads/" + uploadDate + file.name;
		fs.rename(tempPath, targetPath, function(err) {
			if(err) {
				console.log(err)
			}
			else {
				item.image = savePath;
				item.save(function(err, allItems) {
					if(err) {
						res.error(err);
					}
					else {
						res.json(allItems);
					}
				})
			}
		})	
	},
	/////////////////// WORKING ON item.image ////////////////////
	
	getItems: function(req, res) {
		Item.find({}).exec(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems);
			}
		})
	},



	
	getSubmissions: function(req, res) {
		Submission.find({}).exec(function(err, allSubmissions) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allSubmissions);
			}
		})
	},
	postSubmission: function(req, res) {
		var submission = new Submission({
			name: req.body.name,
			email: req.body.email,
			number: req.body.number,
			city: req.body.city,
			state: req.body.state
		})
		submission.save(function(err, allSubmissions) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(allSubmissions);
			}
		})
	}
};






















