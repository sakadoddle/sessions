var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customerController')

console.log(customerController)


// http://localhost:3000/customer/
router.get('/', customerController.initialPage)

//http://localhost:3000/customer/add
router.get('/add', customerController.addPage)


//http://localhost:3000/customer/edit
router.get('/edit', customerController.editPage)


//http://localhost:3000/customer/delete
router.get('/delete', customerController.deletePage)

module.exports = router;