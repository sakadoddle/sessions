var UserModel = require('../models/userModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {


    list: function (req, res, next) {

        UserModel.find({}, function (err, users) {

            // console.log(users)
            return res.render('user/list', { users: users })
        })
    },

    addpage: function (req, res, next) {
        res.render('user/add')
    },


    addAction: function (req, res, next) {
        console.log(req.body)

        res.json(req.body)

        if (req.body.name) {
            res.render('users/add?error=name',)
        }

        if (req.body.address) {
            res.render('users/add?error=name',)
        }

        const user = new UserModel(req.body);

        user.save(function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user',
                    error: err
                });
            }


            // UserMOdel.find

            // return res.status(201).render('car', car);
            return res.render(201).json(car);
        })
    },
}