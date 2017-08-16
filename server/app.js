var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression')
var cors = require('cors')
var mongoose = require('mongoose')

require('dotenv').config()

var index = require('./routes/index');
var customers = require('./routes/customers');
var items = require('./routes/items');
var transactions = require('./routes/transactions');

var app = express();

app.use(compression())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/', index);
app.use('/api/customers', customers);
app.use('/api/items', items);
app.use('/api/transactions', transactions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

mongoose.connect(process.env.DB_URL, err => {
  err ? console.log(err.message) : console.log(`database connected`);;
})

mongoose.Promise = global.Promise

module.exports = app;
