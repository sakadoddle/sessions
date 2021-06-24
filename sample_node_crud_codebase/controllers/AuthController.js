var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/userModel");

module.exports = {
    home: function (req, res) {
        res.render('index', { user: req.user });
    },

    register: function (req, res) {
        res.render('auth/register');
    },

    doRegister: function (req, res) {
        User.register(new User({ username: req.body.username, name: req.body.name }), req.body.password, function (err, user) {
            if (err) {
                return res.render('register', { user: user });
            }

            passport.authenticate('local')(req, res, function () {
                res.redirect('/');
            });
        });
    },

    login: function (req, res) {
        res.render('auth/login');
    },

    doLogin: function (req, res) {
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    }
};
