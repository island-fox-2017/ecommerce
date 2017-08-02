'use strict'
const router = require('express').Router();
const booksCtrl = require('../controllers/booksCtrl')


// create
router.post('/', booksCtrl.insert)


// read
router.get('/', booksCtrl.findAll);

// update
router.put('/:id', booksCtrl.update);

// delete
router.delete('/:id', booksCtrl.delete)

module.exports = router;