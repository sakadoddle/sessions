var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');


// const fileUpload = require('express-fileupload');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost:27017/session', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('we are in')
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')
var carRouter = require('./routes/carRoutes');


var app = express();

// app.use(fileUpload());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

// var User = require('./models/User');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use('/firstPath', indexRouter);

app.use('/users', usersRouter);
app.use('/car', carRouter);

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
