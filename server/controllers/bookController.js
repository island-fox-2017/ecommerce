'use strict'

const ObjectID = require('mongodb').ObjectID;
const Book = require('../models/Book')

let findAll = function(req, res) {
  Book.find({})
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

let findOne = function(req, res) {
  Book.findOne( { _id: req.params.id } )
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

let createOne = (req, res) => {
  Book.create(
  {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock,
    image: req.body.image
  })
  .then(result => res.send("Successfully Created!"))
  .catch(err => res.send(err))
}

let deleteOne = (req, res) => {
  Book.deleteOne( { _id: req.params.id} )
  .then(() => res.send("Successfully Deleted!"))
  .catch(err => res.send(err))
}

let updateOne = (req, res) => {
  Book.updateOne(
  { _id: req.params.id },
  { $set:
    {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock,
      image: req.body.image
    }
  })
  .then(() => res.send("Successfully Updated!"))
  .catch(err => res.send(err))
}

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
}
