const express = require('express')
const router = express.Router()
const custCont = require('../controllers/customerController')

router.get('/', custCont.getAllCustomers)
router.get('/:id', custCont.getOneCustomer)
router.post('/', custCont.createNewCustomer)
router.put('/:id', custCont.updateCustomer)
router.delete('/:id', custCont.deleteCustomer)

module.exports = router
