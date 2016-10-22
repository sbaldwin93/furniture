var User = require('../models/user');
var Item = require('../models/items');
var fs = require('fs-extra');
var path = require('path');

module.exports = {
	postItems: function(req, res) {
		var items = new Item({
			name: req.body.name,
			type: req.body.type,
			length: req.body.length,
			width: req.body.width,
			height: req.body.height,
			price: req.body.price,
			image: req.body.image
		});
		items.save(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems);
			}
		})
	},
	getItems: function(req, res) {
		Item.find({}).exec(function(err, allItems) {
			if(err) {
				res.error(err);
			}
			else {
				res.json(allItems)
			}
		}
	)},
	deleteItems: function(req, res) {
		var id = req.params.id;
		Item.findOneAndRemove({_id: id}, function(err, doc) {
			if(err) {
				console.log(err);
			}
			else {
				res.json(doc);
			}
		})
	}	
};