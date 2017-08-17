'use strict'

const Books = require('../models/books')


// create
exports.insert = (req, res) => {
  Books.create(req.body, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// read
exports.findAll = (req, res) => {
  Books.find({}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err)
  });
};

exports.findById = (req, res) => {
  Books.findOne({_id : req.params.id}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// update
exports.update = (req, res) => {
  Books.findOneAndUpdate({_id : req.params.id}, req.body, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// delete
exports.delete = (req, res) => {
  Books.remove({_id : req.params.id}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};
