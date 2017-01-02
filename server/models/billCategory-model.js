'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let BillCategorySchema = new Schema({
    name: {
        type: String,
        default: 'Internet'
    }
});

mongoose.model('BillCategory', BillCategorySchema);
let BillCategory = mongoose.model('BillCategory');
module.exports = BillCategory;
