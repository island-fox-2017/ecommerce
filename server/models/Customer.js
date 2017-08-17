'use strict'

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  memberid: {
    type:String,
    required: true
  },
  address: {
    type:String,
    required: true
  },
  zipcode: {
    type:String,
    required: true
  },
  phone: {
    type:String,
    required: true
  }
})

const Customer = mongoose.model('Customer', customerSchema)


module.exports = Customer;
