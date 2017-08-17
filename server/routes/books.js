var express = require('express')
var router = express.Router();
var controller = require('../controller/bookController')

// find all
router.get('/', controller.getAllBook)
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//find one
router.get('/:id', controller.getByIdBook)

//update
router.put('/:id', controller.updateBook)

// delete
router.delete('/:id', controller.deleteBook)

// create/insert/add
router.post('/', controller.addBook)



module.exports = router
