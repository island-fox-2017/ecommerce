const express = require('express');
const router = express.Router();

const authCont = require('../controllers/authController');

router.post('/signup', authCont.signup);
router.post('/login', authCont.login);

module.exports = router;
