var Customer = require('../models/customer')

var getAll = (req, res) => {
  Customer.find()
  .then(customers => {
    res.json(customers)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var getOne = (req, res) => {
  Customer.findById(req.params.id)
  .then(found => {
    res.json(found)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var update = (req, res) => {
  let response = {}
  Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    response.message = `Data has been updated`
    response.data = updated
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var remove = (req, res) => {
  let response = {}
  Customer.findByIdAndRemove(req.params.id)
  .then(removed => {
    response.message = `Data has been removed`
    response.data = removed
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var create = (req, res) => {
  let customer = new Customer(req.body)
  customer.save()
  .then(created => {
    res.json(created)
  })
  .catch(err => {
    res.status(500).json(err.message)
  })
}

module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create
}
