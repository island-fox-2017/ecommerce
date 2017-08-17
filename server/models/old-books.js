'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  'isbn'     : String,
  'title'    : String,
  'author'   : String,
  'category' : String,
  'stock'    : Number
});

const Books = mongoose.model('Books', BooksSchema);
module.exports = Books;

//--------------------------------------------

// const mongoose = require('mongoose');
//
// const bookSchema = mongoose.Schema({
//   isbn: {
//     type:String,
//     required: true
//   },
//   title: {
//     type:String,
//     required: true
//   },
//   author: {
//     type:String,
//     required: true
//   },
//   category: {
//     type:String,
//     required: true
//   },
//   stock: {
//     type:Number,
//     required:true
//   }
// })
//
// const Book = mongoose.model('Book', bookSchema);
//
// module.exports = Book;
//
// // -=-=-=-=-==-=-=-=-=-=-=-=-=
// const mongoose = require('mongoose'),
//       Schema = mongoose.Schema
//
//
//
// const transactionSchema = mongoose.Schema({
//   memberid: String,
//   days: Number,
//   out_date: Date,
//   due_date: Date,
//   in_date: Date,
//   fine: Number,
//   booklist: [{ type: Schema.Types.ObjectId, ref: 'Book'}]
// })
//
// const Transaction = mongoose.model('Transaction', transactionSchema);