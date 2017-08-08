var express = require('express');
var router = express.Router();
var controller = require('../controllers/transactionController');

router.post('/', controller.createTransaction);
router.get('/', controller.getAllTransaction);
router.put('/:id', controller.updateTransaction);
router.delete('/:id', controller.deleteTransaction);
router.get('/:id', controller.getOneTransaction);

module.exports = router;