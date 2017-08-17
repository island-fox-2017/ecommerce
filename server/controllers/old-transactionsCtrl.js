'use strict'
const Transactions = require('../models/Transactionss');
const Books = require('../models/Bookss');
const Customer = require('../models/customers');

exports.getAllTransactionsss (req, res) {
  Transactions.find({})
  .populate('Bookslist._id')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.getSingleTransactions(req, res) {
  Transactions.find({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.addNewTransactions(req, res) {
  Transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    Bookslist: req.body.Booksid
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.pushToBooksList(req, res) {
  Transactions.update({
    _id: req.params.id
  },{
    $push: {Bookslist: req.body.Booksid}
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.deleteTransactions(req, res) {
  Transactions.deleteOne({_id: req.params.id})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

exports.updateTransactions(req, res) {
  Transactions.update({_id: req.params.id}, {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    Bookslist: req.body.Booksid
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}
