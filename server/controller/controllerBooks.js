'use strict'

const Book = require('../models/Book')

function getAllBooks(req,res){
  Book.find({})
  .then(function(rows){
    res.send(rows)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
}

function findOneBook(req,res){
  Book.findById(req.params.id)
  .then(row =>{
    res.send(row)
  })
  .catch(err =>{
    res.status(500).send(row)
  })
}

function insertBook(req,res){
  Book.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    img: req.body.img,
    price: req.body.price,
    stock: parseInt(req.body.stock)
  })
  .then(function(data){
    res.send(data)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
}

function deleteBook(req,res){
  Book.deleteOne({
    _id: req.params.id
  })
  .then(function(row){
    res.send(row)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
}

function updateBook(req,res){
  Book.findOneAndUpdate({
    _id:req.params.id
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    price: req.body.price,
    img: req.body.img,
    stock: parseInt(req.body.stock)
  })
  .then(function(result){
    res.send(result)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
}

module.exports = {
  getAllBooks,
  insertBook,
  deleteBook,
  updateBook,
  findOneBook
};
