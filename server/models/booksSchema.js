'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var booksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

var Book = mongoose.model('Book', booksSchema);

module.exports = Book;
