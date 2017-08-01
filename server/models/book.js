var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  author: String,
  description: String,
  price: Number
}, {
  timestamps: true
})


var books = mongoose.model('book', bookSchema);

module.exports = books;
