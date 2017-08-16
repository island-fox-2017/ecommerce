const express = require('express')
const router = express.Router()
const bookCont = require('../controllers/bookController')

router.get('/', bookCont.getAllBooks)
router.get('/:id', bookCont.getOneBook)
router.get('/cat/:genre', bookCont.getBookByGenre)
router.post('/', bookCont.createNewBook)
router.put('/:id', bookCont.updateBook)
router.delete('/:id', bookCont.deleteBook)

module.exports = router
