var express = require('express');
var router = express.Router();
var controller = require('../controllers/customerController');

router.post('/signup', controller.createCustomer);
router.post('/signin', controller.signIn);

module.exports = router;
