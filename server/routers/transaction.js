'use strict'

const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.get('/', transactionController.findAll);
router.get('/:id', transactionController.findOne);
router.post('/', transactionController.createOne);
router.post('/:id', transactionController.pushOneBook);
router.delete('/:id', transactionController.deleteOne);
router.put('/:id', transactionController.updateOne);

module.exports = router;
