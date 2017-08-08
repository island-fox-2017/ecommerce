var Transaction = require('../models/transaction');

var createTransaction = (req,res) => {
  Transaction.create({
    customerid: req.body.customerid,
    date: new Date(),
    suplementlist: req.body.suplementlist,
    totalprice: req.body.totalprice
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllTransaction = (req,res) => {
  Transaction.find()
  .populate({path: 'customerid', select: 'name'})
  .populate({path: 'suplementlist', select: 'name'})
  .exec((err,data) => {
    if(err) res.send(err)
    res.send(data)
  })
}

var updateTransaction = (req,res) => {
  Transaction.update({id: req.params.id},{$set: req.body},(err,result) => {
    if(err) res.send(err)
    res.send(result)
  })
}

var deleteTransaction = (req) => {
  Transaction.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err)
    res.send('data already deleted')
  })
}

var getOneTransaction = (req,res) => {
  Transaction.findById(req.params.id)
  .populate({path: 'customerid', select: 'name'})
  .populate({path: 'suplementlist', select: 'name'})
  .exec((err,data) => {
    if(err) res.send(err)
    res.send(data)
  })
}

module.exports = {
  createTransaction,
  getAllTransaction,
  updateTransaction,
  deleteTransaction,
  getOneTransaction
};