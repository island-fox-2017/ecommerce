const Transaction = require('../models/transaction');


var getAllTransaction = function(req, res) {
  Transaction.find({}, function (err, transactions) {
    res.send(err ? err : transactions)
  });
}

var getOneTransaction = function(req, res) {
  Transaction.find({_id: req.params.id}, (err, trans) => {
    res.send(err ? err: trans)
  })
}

var createTransaction = function(req, res) {
  let newTrans = new Transaction({
    transaction_date: new Date(),
    customer: req.body.customer,
    booklist: req.body.booklist,
    total: req.body.total
  })
  newTrans.save((err, createdTrans) => {
    res.send(err ? err : createdTrans);
  })
}

var updateTransaction = function(req, res) {
  Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true }, (err, trans) => {
    res.send(err ? err: trans)
  })
}

var deleteTransaction = function(req, res) {
  Transaction.findOneAndRemove({_id: req.params.id}, (err, trans) => {
    res.send(err ? err: trans)
  })
}

var getPopulated = function(req, res) {
  Transaction.find({customer: req.body.customer})
  .populate('customer booklist')
  .exec(function(err, trans) {
    res.send(err ? err: trans)
  })
}

module.exports = {
  getAllTransaction,
  getOneTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getPopulated
};
