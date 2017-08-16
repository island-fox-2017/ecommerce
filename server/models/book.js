const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Judul Buku Tidak Boleh Kosong'],
    minlength: [2, 'Judul Buku Terlalu Pendek']
  },
  author: String,
  genre: String,
  price: Number,
  stock: Number,
  image: String
},{
  timestamps: true
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
