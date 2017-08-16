const Book = require('../models/book');

var getAllBooks = function(req, res) {
  Book.find({}, function (err, books) {
    res.send(err ? err : books)
  });
}

var getOneBook = function(req, res) {
  Book.find({_id: req.params.id}, (err, book) => {
    res.send(err ? err: book)
  })
}

var getBookByGenre = function(req, res) {
  Book.find({genre: req.params.genre}, (err, book) => {
    res.send(err ? err: book)
  })
}

var createNewBook = function(req, res) {
  var image;
  if(!req.body.image) {
    image = 'http://placehold.it/200x240'
  } else {
    image = req.body.image
  }
  let newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    price: req.body.price,
    stock: req.body.stock,
    image: image
  })
  newBook.save((err, createdBook) => {
    res.send(err ? err : createdBook);
  })
}

var updateBook = function(req, res) {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, book) => {
    if(err) res.send(err.errors)
    res.send(book)
  })
}

var deleteBook = function(req, res) {
  Book.findOneAndRemove({_id: req.params.id}, (err, book) => {
    if(err) res.send(err)
    res.send(book)
  })
}

var purchased = function(req, res, next) {
  var books = req.body.rawBook;
  books.forEach(book => {
    Book.findOne({_id: book._id}, (err, found) => {
      if(err) res.send(err)
      found.stock -= book.count;
      found.save(function(err, updated) {
        if(err) res.send(err)
      })
    })
  })
  next()
}

module.exports = {
  getAllBooks,
  getOneBook,
  getBookByGenre,
  createNewBook,
  updateBook,
  deleteBook,
  purchased
}
