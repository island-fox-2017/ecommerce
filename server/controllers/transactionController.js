'use strict'

const Transaction = require('../models/Transaction');

let findAll = (req, res) => {
  Transaction.find({})
  .populate('booklist')
  .then(result => {
    res.send(result)
    // res.render('transaction', { datas: result })
  })
  .catch(err => res.send(err))
}

let findOne = (req, res) => {
  Transaction.findOne( { _id: req.params.id } )
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

let createOne = (req, res) => {
  Transaction.create(
  {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  })
  .then(result => res.send("Successfully Created!"))
  .catch(err => res.send(err))
}

let pushOneBook = (req, res) => {
  Transaction.update(
  { _id: req.params.id },
  { $push: { booklist: req.body.book_id } })
  .then(result => res.send("Successfully Inserted!"))
  .catch(err => res.send(err))
}

let deleteOne = (req, res) => {
  Transaction.deleteOne( { _id: req.params.id } )
  .then(result => res.send("Successfully Deleted!"))
  .catch(err => res.send(err))
}

let updateOne = (req, res) => {
  Transaction.updateOne(
  { _id: req.params.id },
  { $set:
    {
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
      booklist: req.body.book_id
    }
  })
}

module.exports = {
  findAll,
  findOne,
  createOne,
  pushOneBook,
  deleteOne,
  updateOne
};
