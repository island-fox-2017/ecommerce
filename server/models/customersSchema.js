'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customersSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.model('Customer', customersSchema);

module.exports = Customer;
