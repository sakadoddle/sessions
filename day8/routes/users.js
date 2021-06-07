var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');


router.get('/', userController.list);

// http://localhost:3000/add X
// http://localhost:3000/users/add C

router.get('/add', userController.addpage);
router.post('/addAction', userController.addAction);

module.exports = router;
