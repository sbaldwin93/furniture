var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
	name            : {type: String},
	type            : {type: String},
	lengt           : {type: String},
	width           : {type: String},
	height          : {type: String},
	price           : {type: String},
	location        : {type: String},
	description     : {type: String},
	image           : {type: String},
	status          : {type: Boolean}
});

var Item = mongoose.model('item', itemSchema);
module.exports = Item;