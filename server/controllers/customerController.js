'use strict'

const Customer = require('../models/Customer');

let findAll = (req,res) => {
  Customer.find({})
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

let findOne = (req, res) => {
  Customer.find( { _id: req.params.id } )
  .then(result => res.send(result))
  .catch(err => res.send(err))
}

let createOne = (req, res) => {
  Customer.create(
  {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => res.send("Successfully Created!"))
  .catch(err => res.send(err))
}

let deleteOne = (req, res) => {
  Customer.deleteOne( { _id: req.params.id } )
  .then(result => res.send("Successfully Deleted!"))
  .catch(err => res.send(err))
}

let updateOne = (req, res) => {
  Customer.updateOne(
  { _id: req.params.id },
  {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => res.send("Successfully Updated!"))
  .catch(err => res.send(err))
}

module.exports = {
  findAll,
  findOne,
  createOne,
  deleteOne,
  updateOne
};
