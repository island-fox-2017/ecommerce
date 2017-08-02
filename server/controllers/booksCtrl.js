'use strict'

const Books = require('../models/books');


// create
exports.insert = (req, res) => {
  let data = {
    title    : req.body.title,
    price    : req.body.price,
    author   : req.body.author,
    image    : req.body.image,
    synopsis : req.body.synopsis
  }
  Books.create(data)
  .then(book => {
    res.send(book)
  })
  .catch(err => {
    res.status(500).send(err)
  });
};


// read
exports.findAll = (req, res) => {
  Books.find({})
  .then(books => {
    res.send(books)
  })
  .catch(err => {
    res.status(500).send(err)
  });
};


// update
exports.update = (req, res) => {
  Books.findOne({_id: req.params.id})
  .then(data => {
    console.log(data);
    let infoUpdate = {
        title    : req.body.title || data.title,
        price    : req.body.price || data.price,
        author   : req.body.author || data.author,
        image    : req.body.image || data.image,
        synopsis : req.body.synopsis || data.synopsis
    }
    Books.findOneAndUpdate({_id: req.params.id}, infoUpdate)
    .then(updated => {
      res.send(updated)
    })
  })
  .catch(err => {
    res.status(500).send(err)
  });
};


// delete
exports.delete = (req, res) => {
  Books.remove({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send(err)
  });
};
