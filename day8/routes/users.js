var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
var UserModel = require('../models/userModel.js');


router.get('/', function (req, res, next) {

    UserModel.find({}, function (err, users) {

        // console.log(users)
        return res.render('user/list', { users: users })
    })
},;

// http://localhost:3000/add X
// http://localhost:3000/users/add C

router.get('/add', ufunction(req, res, next) {
    res.render('user/add')
},
);
router.post('/addAction', userController.addAction);

module.exports = router;


userController = {
    list: function () {
    },

    list: 'asdsa'
}