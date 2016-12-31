'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let AboutSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    team: [{
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
    }]
});

mongoose.model('About', AboutSchema);
let About = mongoose.model('About');
module.exports = About;
