'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerBooks')

router.get('/', controller.getAllBooks)
router.get('/:id', controller.findOneBook)
router.post('/', controller.insertBook)
router.delete('/:id', controller.deleteBook)
router.put('/:id', controller.updateBook)

module.exports = router;
