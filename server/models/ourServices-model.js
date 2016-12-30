'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let OurServicesSchema = new Schema({
    content: {
        type: String
    },
    avatar: {
        type: String
    },
    title: {
        type: String
    },
    freeOfCharge: {
        type: String
    },
    paid: {
        type: String
    }

    // Can always change those
});

mongoose.model('OurServices', OurServicesSchema);
let OurServices = mongoose.model('OurServices');
module.exports = OurServices;