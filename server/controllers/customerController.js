const Customer = require('../models/customer')
const genSalt = require('../helpers/generateSalt');

var getAllCustomers = function(req, res) {
  Customer.find({}, function (err, custs) {
    res.send(err ? err : custs)
  });
}

var getOneCustomer = function(req, res) {
  Customer.find({_id: req.params.id}, (err, cust) => {
    res.send(err ? err : cust)
  })
}

var createNewCustomer = function(req, res) {
  var salt = genSalt.genRandomString(8)
  var password = req.body.password
  var hash = genSalt.createHash(password, salt)
  let newCust = new Customer({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: 'user',
    salt: salt
  })
  newCust.save((err, createdUser) => {
    res.send(err ? err : createdUser);
  })
}

var updateCustomer = function(req, res) {
  Customer.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, cust) => {
    res.send(err ? err : cust)
  })
}

var deleteCustomer = function(req, res) {
  Customer.findOneAndRemove({_id: req.params.id}, (err, cust) => {
    res.send(err ? err : cust)
  })
}

module.exports = {
  getAllCustomers,
  getOneCustomer,
  createNewCustomer,
  updateCustomer,
  deleteCustomer
}
