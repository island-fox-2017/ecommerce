'use strict'

const Customers = require('../models/customers');


// create
exports.insert = (req, res) => {
  Customers.create(req.body, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// read
exports.findAll = (req, res) => {
  Customers.find({}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};

exports.findById = (req, res) => {
  Customers.findOne({_id : req.params.id}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// update
exports.update = (req, res) => {
  Customers.findOneAndUpdate({_id : req.params.id}, req.body, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};


// delete
exports.delete = (req, res) => {
  Customers.remove({_id : req.params.id}, (err, r) => {
    if (!err) res.send(r);
    else res.status(500).send(err);
  });
};