const express = require('express');
const router = express.Router();

const transactionCont = require('../controllers/transactionController')
const bookCont = require('../controllers/bookController')
const authCont = require('../controllers/authController');


router.get('/', transactionCont.getAllTransaction)
router.get('/:id', transactionCont.getOneTransaction)
router.post('/', transactionCont.createTransaction)
router.post('/checkout', authCont.checkout, bookCont.purchased, transactionCont.createTransaction)
router.post('/populated', authCont.allCustomer, transactionCont.getPopulated)
router.put('/:id', transactionCont.updateTransaction)
router.delete('/:id', transactionCont.deleteTransaction)

module.exports = router;
