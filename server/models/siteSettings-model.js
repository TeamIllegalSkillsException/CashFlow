'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let SiteSettingsSchema = new Schema({
    key: {
        type: String
    },

    value: {
        type: String
    },

    icon: {
      type: String
    }
});

mongoose.model('SiteSettings', SiteSettingsSchema);
let SiteSettings = mongoose.model('SiteSettings');
module.exports = SiteSettings;
