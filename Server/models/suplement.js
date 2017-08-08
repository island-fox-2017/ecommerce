'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var suplementSchema = new Schema({
  name: String,
  image: String,
  description: String,
  category: String,
  price: Number,
  stock: Number
});

var Suplement = mongoose.model('suplement',suplementSchema);

module.exports = Suplement;
