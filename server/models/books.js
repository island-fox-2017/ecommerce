'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title   : {
    type     : String,
    required : true
  },
  price   : {
    type     : Number,
    required : true
  },
  author  : String,
  image   : String,
  synopsis: String
});

const Books = mongoose.model('books', BooksSchema);
module.exports = Books;