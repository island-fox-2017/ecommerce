var customers = require('../models/customer')

function getAllCustomer (req,res){
  customers.find({}, function(err, result){
    if(err){
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}
//find all berupa array

function getByIdCustomer (req,res){
  customers.findOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function addCustomer (req,res){
  customers.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function deleteCustomer (req,res){
  customers.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

function updateCustomer (req,res){
  customers.findOneAndUpdate({
    _id: req.params.id
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}
//ok sdh


module.exports = {
   getAllCustomer,
   getByIdCustomer,
   addCustomer,
   deleteCustomer,
   updateCustomer
}
