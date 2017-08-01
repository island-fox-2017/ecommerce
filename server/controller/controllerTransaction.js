'use strict'

const Transaction = require('../models/Transaction');
const Book  = require('../models/Book')

function getAllTransactions(req,res){
  Transaction.find({})
  .populate('booklist', 'title author')
  .then(rows =>{
    res.send(rows)
    // res.render('transaction', {data:rows})
  })
  .catch(err =>{
    res.status(500).send(err)
  })
}

function findOneTransaction(req,res){
  Transaction.findById(req.params.id)
  .populate('booklist')
  .then(row=>{
    res.send(row)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

function insertTransaction(req,res){
  Transaction.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  })
  .then(log => {
    res.send(log)
  })
  .catch(err =>{
    res.status(500).send(err)
  })
}

function updateTransaction(req,res){
  Transaction.findOneAndUpdate({
    _id: req.params.id
  },{
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.book_id
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.status(500).send(err);
  })
}

function deleteTransaction(req,res){
  Transaction.deleteOne({
    _id: req.params.id
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

function addBookToTransaction(req,res){
  Transaction.findOneAndUpdate({
    memberid: req.params.id
  },{
    $push:{
      booklist: req.body.book_id
    }
  })
  .then(log=>{
    Book.findById(req.body.book_id)
    .then(row =>{
      Book.findOneAndUpdate({
        _id: req.body.book_id
      },{
        stock: row.stock - 1
      })
      .then(log2=>{
        res.send(log)
      })
    })
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}

module.exports = {
  getAllTransactions,
  insertTransaction,
  findOneTransaction,
  deleteTransaction,
  updateTransaction,
  addBookToTransaction
};
