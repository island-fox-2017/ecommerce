var express = require('express');
var router = express.Router();
var transactionCtrl = require('../controllers/transactionsController')

/* GET users listing. */
router.get('/', transactionCtrl.getAll)
router.get('/:id', transactionCtrl.getOne)
router.post('/', transactionCtrl.create)
router.post('/return/:id', transactionCtrl.returned)
router.put('/:id', transactionCtrl.update)
router.delete('/:id', transactionCtrl.remove)

module.exports = router;
