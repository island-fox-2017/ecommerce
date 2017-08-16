var express = require('express');
var router = express.Router();
var controller = require('../controllers/transController')

router.get('/', controller.findTransactions);

router.get('/:id', controller.findById);

router.post('/', controller.insertTransaction);

router.post('/:id', controller.insertBooklist);

router.delete('/:id', controller.removeTrans);

// router.put('/:id', controller.updateTrans);
//Not yet

module.exports = router;
