'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema(
{
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number,
  image: String
});

// Simpan ke collection books (di database)
// (standard penamaan collection huruf kecil semua dan akhirnya ada s)
let Book = mongoose.model('Book', bookSchema);

module.exports = Book;
