var Transaction = require('../models/transaction')
var Item = require('../models/item')

var getAll = (req, res) => {
  Transaction.find()
  // {path:'books', select:'title pages'}
  // .populate({path:'booklist', select:'title author'})
  .populate('buyer, item_list')
  .exec()
  .then(trans => res.json(trans))
  .catch(err => res.status(500).json(err))
}

var getOne = (req, res) => {
  Transaction.findById(req.params.id)
  .populate('buyer, item_list')
  .exec()
  .then(found => res.json(found))
  .catch(err => res.status(500).json(err))
}

var update = (req, res) => {
  let response = {}
  Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
  Transaction.findByIdAndRemove(req.params.id)
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
  let transaction = new Transaction({
    buyer: req.body.buyer,
    item_list: req.body.item_list,
    total_price: req.body.total_price
  })
  transaction.save()
  .then(created => {
    res.send(created)
  })
  .catch(err => {
    res.status(500).send(err)
  })
}

var returned = function (req, res) {
  Transaction.findById(req.params.id)
  .then(found => {
    let in_date = new Date(req.body.in_date)
    let booksCount = found.booklist.length
    let overDueDays = Math.floor((in_date - found.due_date) / (24*60*60*1000))
    let totalFine = 500 * booksCount * overDueDays
    found.in_date = req.body.in_date
    found.fine = totalFine
    found.save()
    .then(newTrans => {
      let bookIds = newTrans.booklist
      for (let i = 0; i < bookIds.length; i++) {
        Item.findById(bookIds)
        .then(book => {
          book.stock += 1
          book.save()
          .then(created => {console.log(`stock updated`)})
          .catch(err => {console.log(errr)})
        })
      }
      res.json(newTrans)
    })
    .catch(err => res.status(500).json(err))
  })
  .catch(err => res.status(500).json(err))
}

module.exports = {
  getAll,
  getOne,
  update,
  remove,
  create,
  returned
}
