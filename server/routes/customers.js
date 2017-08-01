var express = require('express')
var router = express.Router();
var controller = require('../controller/customerController')

// find all
router.get('/', controller.getAllCustomer)

//find one
router.get('/:id', controller.getByIdCustomer)

//update
router.put('/:id', controller.updateCustomer)

// delete
router.delete('/:id', controller.deleteCustomer)

// create/insert/add
router.post('/', controller.addCustomer)



module.exports = router
