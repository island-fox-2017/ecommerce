var transactions = require('../models/transaction')

function getAllTransaction (req,res){
  transactions.find({})
  .populate('booklist')
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function getByIdTransaction (req,res){
  transactions.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addTransaction (req,res){
  transactions.create({
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.BookId
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteTransaction (req,res){
  transactions.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateTransaction (req,res){
  transactions.findOneAndUpdate({
    _id: req.params.id
  }, {
    memberid: req.body.memberid,
    days: req.body.days,
    out_date: req.body.out_date,
    due_date: req.body.due_date,
    in_date: req.body.in_date,
    fine: req.body.fine,
    booklist: req.body.BookId
    //using
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}
//ok sdh

// mongoose push array
function showBookInTransaction (req,res){
  transactions.findOneAndUpdate({
    _id: req.params.id
  }, {
    $push:{
      booklist:req.body.BookId
    }
  })
  .then(result => {
    res.send(result)
  })
  .catch(result => {
    res.status(500).send(err)
  })
}


module.exports = {
   getAllTransaction,
   getByIdTransaction,
   addTransaction,
   deleteTransaction,
   updateTransaction,
   showBookInTransaction
}
