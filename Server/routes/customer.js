var express = require('express');
var router = express.Router();
var controller = require('../controllers/customerController');

router.post('/', controller.createCustomer);
router.get('/', controller.getAllCustomer);
router.put('/:id', controller.updateCustomer);
router.delete('/:id', controller.deleteCustomer);
router.get('/:id', controller.getOneCustomer);

module.exports = router;