'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerTransaction')

router.get('/', controller.getAllTransactions)
router.get('/:id', controller.findOneTransaction)
router.post('/', controller.insertTransaction)
router.delete('/:id', controller.deleteTransaction)
router.put('/:id', controller.updateTransaction)
router.post('/:id', controller.addBookToTransaction)


module.exports = router;
