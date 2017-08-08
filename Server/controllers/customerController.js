'use strict'
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var Customer = require('../models/customer');

var createCustomer = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  Customer.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    username: req.body.username,
    password: hash
  },(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var getAllCustomer = (req,res) => {
  Customer.find({},(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}

var updateCustomer = (req,res) => {
  Customer.update({ _id: req.params.id }, { $set: req.body }, (err,result) => {
    if(err) res.send(err);
    console.log(result);
    res.send(result);
  })
}

var deleteCustomer = (req,res) => {
  Customer.findByIdAndRemove(req.params.id,(err) => {
    if(err) res.send(err);
    res.send('data already deleted')
  })
}

var getOneCustomer = (req,res) => {
  Customer.findById(req.params.id,(err,result) => {
    if(err) res.send(err)
    console.log(result);
    res.send(result);
  })
}



var signIn = (req,res) => {
  Customer.findOne({username: req.body.password})
  .then(data => {
    console.log(data);
    if(bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({username: data.username, email:data.email}, 'SECRET_KEY')
      res.send({
        msg : 'login sukses',
        token: token
      })
    }else {
      res.send('invalid username & password')
    }
  })
}

module.exports = {
  createCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  getOneCustomer,
  signIn
};