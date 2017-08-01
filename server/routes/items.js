var express = require('express');
var router = express.Router();
var itemsCtrl = require('../controllers/itemsController')

/* GET users listing. */
router.get('/', itemsCtrl.getAll)
router.get('/:id', itemsCtrl.getOne)
router.post('/', itemsCtrl.create)
router.put('/:id', itemsCtrl.update)
router.delete('/:id', itemsCtrl.remove)

module.exports = router;
