let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    'name': String,
    'age': String,
    'address': String,
    'phone': String,
    'email': String
});

module.exports = mongoose.model('user', userSchema);
