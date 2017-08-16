var mongoose = require('mongoose')

var customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `name cannot be null`]
  },
  address: {
    type: String,
    required: [true, `name cannot be null`]
  },
  zipcode: {
    type: String,
    required: [true, `name cannot be null`]
  },
  phone: {
    type: String
  }
})

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer
