const customer = require('../models/customerModel');


console.log(customer)

module.exports = {
    initialPage: function (req, res, next) {
        console.log(req)
        res.send('Customer')
    },


    addPage: function (req, res, next) {

        res.send('Customer ADD')
    },
    editPage: function (req, res, next) {
        res.send('Customer Edit')

    },
    deletePage: function (req, res, next) {
        res.send('Customer Deletes')

    }
}
