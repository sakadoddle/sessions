var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var articleSchema = new Schema({
	'name' : String,
	'desc' : String,
	'position' : Number,
	'link' : String,
	'created_at' : Date
});

module.exports = mongoose.model('article', articleSchema);
