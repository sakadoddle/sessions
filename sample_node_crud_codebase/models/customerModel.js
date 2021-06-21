var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let customerSchema = new Schema({
    'name': String,
    'age': Number,
    'phone': String,
    'addreess': String,
    'email': String,
});

module.exports = mongoose.model('customers', customerSchema);
