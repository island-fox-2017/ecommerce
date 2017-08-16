var express = require('express');
var router = express.Router();
var controller = require('../controllers/customersController')

router.get('/', controller.findAllCustomers);

router.get('/:id', controller.findCustById);

router.post('/', controller.insertData);

router.delete('/:id', controller.removeData);

router.put('/:id', controller.updateData);

module.exports = router;
