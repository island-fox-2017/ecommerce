var express = require('express');
var router = express.Router();
var customerCtrl = require('../controllers/customersController')

/* GET users listing. */
router.get('/', customerCtrl.getAll)
router.get('/:id', customerCtrl.getOne)
router.post('/', customerCtrl.create)
router.put('/:id', customerCtrl.update)
router.delete('/:id', customerCtrl.remove)

module.exports = router;
