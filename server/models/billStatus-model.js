'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let BillStatusSchema = new Schema({
    name: {
        type: String,
        default: 'Unpaid'
    }
});

mongoose.model('BillStatus', BillStatusSchema);
let BillStatus = mongoose.model('BillStatus');
module.exports = BillStatus;
