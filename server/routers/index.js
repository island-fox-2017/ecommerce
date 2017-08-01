'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Welcome To Mongoose ODM"));

module.exports = router;
