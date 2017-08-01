var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecom', function(err){
  if(err) {console.log(err);}
  else {
  console.log('db connected');}
})
//var index = require('./routes/index');
//var users = require('./routes/users');
var books = require('./routes/books');
var transactions = require('./routes/transactions')
var customers = require('./routes/customers')
var cors = require('cors')


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', function(req,res){
  res.send('express is listening')
})

// app.use('/', index);
// app.use('/users', users);
app.use('/books', books);
app.use('/transactions', transactions);
app.use('/customers', customers);

app.listen(3000)

module.exports = app;
