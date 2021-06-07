var UserModel = require('../models/userModel.js');
// const fileUpload = require('express-fileupload');

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


        // if (!req.files || Object.keys(req.files).length === 0) {
        //     return res.status(400).send('No files were uploaded.');
        // }

        // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        // let sampleFile = req.files.sampleFile;

        // // Use the mv() method to place the file somewhere on your server
        // sampleFile.mv('filename.jpg', function (err) {
        //     if (err)
        //         return res.status(500).send(err);

        // });

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