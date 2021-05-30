let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let carSchema = new Schema({
	'carDoor': Number,
	'color': String,
	'tire': String,
	'headlight': Boolean
});

module.exports = mongoose.model('car', carSchema);
