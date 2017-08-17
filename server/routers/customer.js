'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/controllerCustomers')

router.get('/', controller.getAllCustomer);
router.get('/:id', controller.findOneCustomer);
router.post('/', controller.insertCustomer);
router.delete('/:id', controller.deleteCustomer);
router.put('/:id', controller.updateCustomer);



module.exports = router;
