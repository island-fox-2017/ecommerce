const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/klontong');

let app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let index = require('./routers/index')
let books = require('./routers/books')
let customers = require('./routers/customers')
let transactions = require('./routers/transactions')

app.use('/', index)
app.use('/api/books', books)
app.use('/api/customers', customers)
app.use('/api/transactions', transactions)


app.listen(3000, function(){
  console.log('I am listening on port 3000');
})
