'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let UserAccountSchema = new Schema({
    user_id: {
        type: String
    },
    accounts: [{
        name: {
          type: String
        },
        amount: {
          type: Number
        },
        type: {
          type: String,
          default: 'Normal'
        },
        currency: {
          type: 'String',
          default: '$USD'
        }
    }]
});

mongoose.model('UserAccount', UserAccountSchema);
let UserAccount = mongoose.model('UserAccount');
module.exports = UserAccount;
