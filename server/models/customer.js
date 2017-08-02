const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

var customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama tidak boleh kosong']
  },
  username: {
    type: String,
    required: [true, 'Username tidak boleh kosong'],
    minlength: [5, 'Username minimal 5 karakter'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Mohon masukkan kata sandi']
  },
  role: String,
  salt: String
}, {
  timestamps: true
})

customerSchema.plugin(uniqueValidator);

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
