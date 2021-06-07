var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let articleByTemplate = require('./routes/article_by_template');
let articleByApi = require('./routes/article_by_api');
const mongoose = require('mongoose');

var app = express();




// const fileUpload = require('express-fileupload');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost:27017/article', { useNewUrlParser: true, useUnifiedTopology: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users', usersRouter);

// Route used for Article Template  will be used mainly for to create cms app
app.use('/article', articleByTemplate);

// Route used for Article Api will be used mainly for react app
app.use('/api/article', articleByApi);


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
