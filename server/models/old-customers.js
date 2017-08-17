'use srict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
  'name' : String,
  'memberid' : String,
  'address' : String,
  'zip' : String,
  'phone' : String
});

const Customers = mongoose.model('Customers', CustomersSchema);
module.exports = Customers;

// ---------------------------------

// const mongoose = require('mongoose');
//
// const customerSchema = mongoose.Schema({
//   name: {
//     type:String,
//     required: true
//   },
//   memberid: {
//     type:String,
//     required: true
//   },
//   address: {
//     type:String,
//     required: true
//   },
//   zipcode: {
//     type:String,
//     required: true
//   },
//   phone: {
//     type:String,
//     required: true
//   }
// })
//
// const Customer = mongoose.model('Customer', customerSchema)