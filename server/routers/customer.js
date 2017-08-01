'use strict'

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.findAll);
router.get('/:id', customerController.findOne);
router.post('/', customerController.createOne);
router.delete('/:id', customerController.deleteOne);
router.put('/:id', customerController.updateOne);

module.exports = router;
