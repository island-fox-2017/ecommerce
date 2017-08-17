const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));


const index = require('./routes/index');
const books = require('./routes/books');
// const customers = require('./routes/customers')


app.use('/', index);
app.use('/books', books);
// app.use('/customers', customers)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/book-store')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(3000, () => console.log('Listening. Connected to book-store db'));
})


