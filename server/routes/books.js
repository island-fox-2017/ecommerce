var express = require('express');
var router = express.Router();
var controller = require('../controllers/booksController')

/* GET users listing. */
router.get('/', controller.findAllBooks);

router.get('/:id', controller.findBooksById);

router.post('/', controller.insertData);

router.delete('/:id', controller.removeData);

router.put('/:id', controller.editData);

module.exports = router;
