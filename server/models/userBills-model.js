'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let UserBillsSchema = new Schema({
    user_id: {
        type: String
    },
    bills: [{
        amount: {
            type: Number
        },
        startDueDate: {
            type: Date
        },
        endDueDate: {
            type: Date
        },
        accountPaidFrom: {
            _id: String,
            name:  String
        },
        recurrence: {
            type: String
        },
        category: {
            type: String
        },
        notes: {
            type: String
        },
        status: {
            type: String
        }
    }]
});

mongoose.model('UserBills', UserBillsSchema);
let UserBills = mongoose.model('UserBills');
module.exports = UserBills;
