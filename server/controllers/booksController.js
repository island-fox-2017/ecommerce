'use strict'

var booksController = require('../models/booksSchema');

let findAllBooks = (req, res) => {
  booksController.find()
  .then(data_books => {
    console.log('fungsi findAllBooks berjalan dengan baik');
    res.send(data_books)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let findBooksById = (req, res) => {
  booksController.findOne({
    _id: req.params.id
  })
  .then(data_book => {
    res.send(data_book);
  })
  .catch(err => {
    res.status(500).send(err);
  })

}

let insertData = (req, res) => {
  booksController.create({
    title: req.body.title,
    author: req.body.author,
    about: req.body.about,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price
  })
  .then(data_inserted => {
    res.send(data_inserted);
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

let removeData = (req, res) => {
  booksController.deleteOne({
    _id: req.params.id
  })
  .then(() => {
    res.send('Delete success')
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let editData = (req, res) => {
  booksController.updateOne({
    _id: req.params.id
  }, {
    title: req.body.title,
    author: req.body.author,
    about: req.body.about,
    img: req.body.img,
    category: req.body.category,
    price: req.body.price
  })
  .then(data_update => {
    res.send(data_update);
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

module.exports = {
  findAllBooks,
  findBooksById,
  insertData,
  removeData,
  editData
}
