var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const seekerRouter = require('./routes/seekerRouter');
const companyRouter = require('./routes/companyRouter');
const jobRouter = require('./routes/jobRouter');
const chatRouter = require('./routes/chatRouter');


const config = require('./config/config');

const mongoose = require('mongoose');
//Db Connection 
const url = config.mongoUrl
const connect = mongoose.connect(url, {
   useNewUrlParser: true
  });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/seeker', seekerRouter);
app.use('/companies', companyRouter);
app.use('/jobs',jobRouter);
app.use('/chat',chatRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
