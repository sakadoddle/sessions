var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let articleByTemplate = require('./routes/article_by_template');
let articleByApi = require('./routes/article_by_api');
let customer = require('./routes/customerList')


const mongoose = require('mongoose');
const session = require('express-session');
const fileUpload = require('express-fileupload');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var app = express();
app.use(cors())


mongoose.connect('mongodb://localhost:27017/article', { useNewUrlParser: true, useUnifiedTopology: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(fileUpload());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
  name: 'session-id',
  secret: '4!wz@%TXnX2EA4pJ#V',
  saveUninitialized: false,
  resave: false
}));
app.use(passport.initialize());
app.use(passport.session());



const UserModel = require('./models/userModel');
passport.use(new LocalStrategy(UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// app.use('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: false }), function (req, res) {
//   res.redirect('/homepage');
// });


app.use('/', indexRouter);
app.use('/customer', usersRouter);

// Route used for Article Template  will be used mainly for to create cms app
app.use('/article', articleByTemplate);

// Route used for Article Api will be used mainly for react app
app.use('/api/article', articleByApi);


// app.use('/customer', customer)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
