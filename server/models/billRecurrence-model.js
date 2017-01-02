'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let BillRecurrenceSchema = new Schema({
    name: {
        type: String,
        default: 'Monthly'
    }
});

mongoose.model('BillRecurrence', BillRecurrenceSchema);
let BillRecurrence = mongoose.model('BillRecurrence');
module.exports = BillRecurrence;
