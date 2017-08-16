'use strict'

var custController = require('../models/customersSchema');

let findAllCustomers = (req, res) => {
  custController.find()
  .then(data_customers => {
    res.send(data_customers)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let findCustById = (req, res) => {
  custController.findOne({
    _id: req.params.id
  })
  .then(data_customer => {
    res.send(data_customer)
  })
  .catch(err => {
    res.status(500).send(err);
  })
}

let insertData = (req, res) => {
  custController.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(data_inserted => {
    res.send(data_inserted)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let removeData = (req, res) => {
  custController.deleteOne({
    _id: req.params.id
  })
  .then(() => {
    res.send('Delete customer success')
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

let updateData = (req, res) => {
  custController.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
  .then(data_update => {
    res.send(data_update)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

module.exports = {
  findAllCustomers,
  findCustById,
  insertData,
  removeData,
  updateData
}
