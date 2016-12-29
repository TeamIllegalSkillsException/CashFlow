'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let TestimonialSchema = new Schema({
    content: {
        type: String,
    },
    avatar: {
        type: String,
    },
    name: {
        type: String,
    },
    jobTitle: {
        type: String,
    }
});

mongoose.model('Testimonial', TestimonialSchema);
let Testimonial = mongoose.model('Testimonial');
module.exports = Testimonial;