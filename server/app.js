'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const Index = require('./routers/index');
const Book = require('./routers/book');
const Customer = require('./routers/customer');
const Transaction = require('./routers/transaction');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());
app.use(cors())

app.use('/', Index);
app.use('/book', Book);
app.use('/customer', Customer)
app.use('/transaction', Transaction)

app.listen(process.env.PORT || 4500);
