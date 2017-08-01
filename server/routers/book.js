'use strict'

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.findAll);
router.get('/:id', bookController.findOne);
router.post('/', bookController.createOne);
router.delete('/:id', bookController.deleteOne);
router.put('/:id', bookController.updateOne);

module.exports = router;
