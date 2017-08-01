var mongoose = require('mongoose')
var Schema = mongoose.Schema

var transactionSchema = new Schema({
  buyer: [{
    type: Schema.Types.ObjectId, ref: 'Customer'
  }],
  total_price: {
    type: Number
  },
  item_list: [{ type: Schema.Types.ObjectId, ref: 'Item'}]
}, { timestamps: true })

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction
