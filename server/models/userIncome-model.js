'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let UserIncomeSchema = new Schema({
    user_id: {
        type: String
    },
    incomes: [{
        company: {
            type: String
        },
        amount: {
            type: Number
        },
        startDate: {
            type: Date
        },
        accounts: [{}],
        recurrence: {
            _id: String,
            name: String
        }
    }]

});

mongoose.model('UserIncome', UserIncomeSchema);
let UserIncome = mongoose.model('UserIncome');
module.exports = UserIncome;