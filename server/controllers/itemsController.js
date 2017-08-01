var Item = require('../models/item')

var getAll = (req, res) => {
  Item.find()
  .then(items => {
    res.json(items)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var getOne = (req, res) => {
  Item.findById(req.params.id)
  .then(found => {
    res.json(found)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var update = (req, res) => {
  let response = {}
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    response.message = `Data updated`
    response.data = updated
    res.json(response)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var remove = (req, res) => {
  let response = {}
  Item.findByIdAndRemove(req.params.id)
  .then(removed => {
    response.message = `Data removed`
    response.data = removed
    res.json(removed)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

var create = (req, res) => {
  let book = new Item(req.body)
  book.save()
  .then(created => {
    res.json(created)
  })
  .catch(err => {
    res.status(500).json(err)
  })
}

module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create
}
