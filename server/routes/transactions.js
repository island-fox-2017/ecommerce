var express = require('express')
var router = express.Router();
var controller = require('../controller/transactionController')

// find all
router.get('/', controller.getAllTransaction)

//find one
router.get('/:id', controller.getByIdTransaction)

//update
router.put('/:id', controller.updateTransaction)

// delete
router.delete('/:id', controller.deleteTransaction)

// create/insert/add
router.post('/', controller.addTransaction)

//add book in transaction
router.post('/:id', controller.showBookInTransaction)


module.exports = router
