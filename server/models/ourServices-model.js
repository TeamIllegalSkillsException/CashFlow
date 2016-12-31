'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let OurServicesSchema = new Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: String
    },
    content: {
        type: String
    },
    modules: [
        {
            title: String,
            isAvailable: Boolean
        }
    ]
});

mongoose.model('OurServices', OurServicesSchema);
let OurServices = mongoose.model('OurServices');
module.exports = OurServices;
