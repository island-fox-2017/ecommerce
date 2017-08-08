const express = require('express');
const router = express.Router();
const controller = require('../controllers/suplementController');

router.post('/', controller.createSuplement)
router.get('/', controller.getAllSuplement)
router.put('/:id', controller.getAllSuplement)
router.delete('/:id', controller.deleteSuplement)
router.get('/:id', controller.getOneSuplement)

module.exports = router;