'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let IncomeRecurrenceSchema = new Schema({
    name: {
        type: String,
        default: 'monthly'
    }
});

mongoose.model('IncomeRecurrence', IncomeRecurrenceSchema);
let IncomeRecurrence = mongoose.model('IncomeRecurrence');
module.exports = IncomeRecurrence;