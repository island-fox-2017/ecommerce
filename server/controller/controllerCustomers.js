'use strict'

const Customer = require('../models/Customer')

function getAllCustomer(req,res){
  Customer.find({})
  .then(rows =>{
    res.send(rows)
  })
  .catch(err =>{
    res.status(500).send(err)
  })
}

function findOneCustomer(req,res){
  Customer.findById(req.params.id)
  .then(row => {
    res.send(row)
  })
  .catch(err =>{
    res.status(500).send(err)
  })
}

function insertCustomer(req,res){
  Customer.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteCustomer(req,res){
  Customer.deleteOne({
    _id: req.params.id
  })
  .then(log => {
    res.send(log)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateCustomer(req,res){
  Customer.findOneAndUpdate({
    _id: req.params.id
  },{
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.status(500).send(err)
  })
}


module.exports = {
    getAllCustomer,
    findOneCustomer,
    insertCustomer,
    deleteCustomer,
    updateCustomer
};
