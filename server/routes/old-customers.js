'use strict'

const router = require('express').Router();
const custCtrl = require('../controller/customersCtrl');

// create
router.post('/', custCtrl.insert)

// read
router.get('/', custCtrl.findAll)
router.get('/:id', custCtrl.findById)

// update
router.put('/:id', custCtrl.update)

// delete
router.delete('/:id', custCtrl.delete)


module.exports = router;