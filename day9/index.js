const mongoose = require('mongoose');


/*
Connection String

mongodb://<username>:<password>@<DB IP>:<DB PORT>/<Database>
mongodb://localhost/day9

*/


mongoose.connect('mongodb://localhost:27017/day9', { useNewUrlParser: true, useUnifiedTopology: true });

// console.log(mongoose)

const db = mongoose.connection;   // Current Connected Database Get 

db.once('open', function () {
    console.log('Connected To Database')
});


db.on('error', (err) => {
    console.log(err)
});



const kittySchema = new mongoose.Schema({
    name: String,
    isActive: Boolean
});


const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'ram', isActive: true });


console.log(silence)
