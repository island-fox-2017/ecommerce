var books = require('../models/book')


function getAllBook (req,res){

  books.find({}, function(err, result){
  console.log(result);
    if(err){
      console.log(err);
      res.status(500).send(err)
    } else {
      console.log(result);
      res.send(result)
    }
  })
}
//find all berupa array

function getByIdBook (req,res){
  books.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addBook (req,res){
  books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteBook (req,res){
  books.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateBook (req,res){
  books.findOneAndUpdate({
    _id: req.params.id
  }, {
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}
//ok good sdh


module.exports = {
   getAllBook,
   getByIdBook,
   addBook,
   deleteBook,
   updateBook
}
