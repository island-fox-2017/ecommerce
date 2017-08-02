const genSalt = require('../helpers/generateSalt');
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer');
const mongoose = require('mongoose');
mongoose.connect('/mongodb://localhost/klontong');
require('dotenv').config();

var login = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var token = req.body.token;

  if (!token) {
    Customer.findOne({
      username: username
    }, function(err, customer) {
      if(err) {
        res.send(err)
      }
      if(customer) {
        console.log('=========masuk jadi customer');
        var saltUserLogin = customer.salt;
        var passwordUserLogin = req.body.password;
        var getPasswordUser = genSalt.createHash(passwordUserLogin, saltUserLogin)
        if(customer.password == getPasswordUser) {
          var token = jwt.sign({id: customer._id, username: customer.username, role: customer.role}, process.env.SECRET_JWT)
          res.send(token)
        } else {
          res.send('Maaf username atau password salah')
        }
      }
    })
  } else {
    res.send('Anda sudah mempunyai token')
  }
}

var signup = function(req, res, next){
  var salt = genSalt.genRandomString(8)
  var password = req.body.password
  var hash = genSalt.createHash(password, salt)
  var token = req.body.token;

  var newCustomer = new Customer({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: 'user',
    salt: salt
  })
  newCustomer.save((err, customer) => {
    if(err){
      res.send(err.errors)
      console.log(err);
    } else {
      res.send(customer)
      console.log('suskses');
    }
  })
}

var authCustomer = function(req, res, next) {
  let token = req.body.token

  if(token){
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if(decoded.id = req.params.id) {
        next()
      } else {
        res.send('Maaf anda tidak diizinkan akses halaman ini')
      }
    })
  } else {
    res.send('Anda belum login')
  }
}

var allCustomer = function(req, res, next){
  let token = req.body.token || req.headers.token

  if(token){
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if(decoded){
        req.body.customer = decoded.id
        next()
      } else {
        res.send('Maaf anda tidak diizinkan akses halaman ini')
      }
    })
  } else {
    res.send('Anda belum login')
  }
}

var checkout = function(res, req, next) {
  // var token = req.body.token
  var token = req.headers.token
  console.log('---------------masuk checkout token ada', token);
  var cart = JSON.parse(req.body.cart)
  var total = req.body.total;

  if(token) {
    console.log('---------------masuk checkout token ada', token);
    jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
      if(decoded) {
        var booklist = []
        var rawBook = []
        cart.forEach(item => {
          booklist.push(item._id);
          rawBook.push(item)
        })
        var customer = decoded._id

        req.body.rawBook = rawBook
        req.body.booklist = booklist
        req.body.customer = customer
        req.body.total = total
        next()
      } else {
        res.send('Maaf anda tidak diizinkan akses halaman ini')
      }
    })
  } else {
    res.send('Anda belum login')
  }
}

module.exports = {
  login,
  signup,
  authCustomer,
  allCustomer,
  checkout
}
