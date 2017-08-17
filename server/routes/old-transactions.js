'use strict'

const router = require('express').Router();
const transactionsCtrl = require('../controllers/transactionsCtrl');

router.get('/', transactionsCtrl.getAllTransactions);
router.get('/:id', transactionsCtrl.getSingleTransaction);
router.post('/', transactionsCtrl.addNewTransaction);
router.post('/:id', transactionsCtrl.pushToBookList);
router.delete('/:id', transactionsCtrl.deleteTransaction);
router.put('/:id', transactionsCtrl.updateTransaction);

module.exports = router;