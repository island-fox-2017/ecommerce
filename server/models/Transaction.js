'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema(
{
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
