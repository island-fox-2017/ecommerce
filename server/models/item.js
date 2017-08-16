
var mongoose = require('mongoose')

var itemSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, 'isbn column cannot be null'],
    unique: [true, 'isbn code already used']
  },
  title: {
    type: String,
    required: [true, 'title column cannot be null']
  },
  seller: {
    type: String,
    required: [true, 'seller column cannot be null']
  },
  sellerID: {
    type: String,
    required: [true, 'sellerID column cannot be null']
  },
  category: {
    type: String,
    default: 'uncategorized'
  },
  price: {
    type: Number
  },
  stock: {
    type: Number,
    required: [true, 'Stock cannot be null'],
    min: 0
  },
  summary: {
    type: String
  },
  description: {
    type: String
  }
}, { timestamps: true })

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
