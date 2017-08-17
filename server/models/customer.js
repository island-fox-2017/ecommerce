var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid: {
    type: String,
    unique: true
  },
  address: String,
  zipcode: String,
  phone: String
}, {
  timestamps: true
})

var customers = mongoose.model('customer', customerSchema);

module.exports = customers;
