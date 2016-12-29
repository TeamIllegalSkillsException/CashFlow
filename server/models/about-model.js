'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let AboutSchema = new Schema({
    content: {
        type: String
    },
    title: {
        type: String
    },
    avatar: {
        type: String
    },
    name: {
        type: String
    },
    jobTitle: {
        type: String
    },
    socialMediaIcons: [{}]

});

mongoose.model('About', AboutSchema);
let About = mongoose.model('About');
module.exports = About;