var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  customerId: String,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'book'
  }]
}, {
  versionKey: false
})

var transactions = mongoose.model('transaction', transactionSchema);

module.exports = transactions;
