'use strict'

var transModel = require('../models/transactionsSchema');

let findTransactions = (req, res) => {
  transModel.find()
  .populate('booklist')
  .then(data_trans => {
    res.send(data_trans)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let findById = (req, res) => {
  transModel.findOne({
    _id: req.params.id
  })
  .populate('booklist')
  .then(data_transaction => {
    res.send(data_transaction);
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

let insertTransaction = (req, res) => {
  transModel.create({
    memberid: req.body.memberid || "CD001",
    booklist: req.body.bookid
  })
  .then(data_transaction => {
    res.send(data_transaction)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let insertBooklist = (req, res) => {
  transModel.update({
    _id: req.params.id
  }, {
    $push: {
      booklist: req.body.bookid
    }
  })
  .then(() => {
    res.send('Adding booklist to transactions success')
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let removeTrans = (req, res) => {
  transModel.deleteOne({
    _id: req.params.id
  })
  .then(() => {
    res.send('Delete transaction success')
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

//Not yet figured out how to update booklist
// let updateTrans = (req, res) => {
//   transModel.updateOne({
//     _id: req.params.id
//   }, {
//     name: req.body.name,
//     memberid: req.body.memberid,
//     address: req.body.address,
//     zipcode: req.body.zipcode,
//     phone: req.body.phone
//   })
//   .then(data_update => {
//     res.send(data_update)
//   })
//   .catch(err => {
//     res.status(500).send(err)
//   })
// }

module.exports = {
  findTransactions,
  findById,
  insertTransaction,
  insertBooklist,
  removeTrans
}
