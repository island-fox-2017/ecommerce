'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: String,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' } ]
}, {
  timestamps: true
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
