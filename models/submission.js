var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var submissionSchema = new Schema({
	name            : {type: String},
	email           : {type: String},
	number          : {type: String},
	city            : {type: String},
	state           : {type: String}
});

var Submission = mongoose.model('submission', submissionSchema);
module.exports = Submission;