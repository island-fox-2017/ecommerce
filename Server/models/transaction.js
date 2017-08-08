var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  customerid: [{
    type: Schema.Types.ObjectId,
    ref: 'customer'
  }],
  date: Date,
  suplementlist: [{
    type: Schema.Types.ObjectId,
    ref: 'suplement'
  }],
  totalprice: Number
});

var Transaction = mongoose.model('transaction',transactionSchema);
module.exports = Transaction;