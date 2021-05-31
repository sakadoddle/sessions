var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');


router.get('/', userController.list);

router.get('/add', userController.addpage);
router.post('/addAction', userController.addAction);

module.exports = router;
