'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let SiteSettingsSchema = new Schema({
    // SITE_ICON: {
    //     type: String
    // },
    // SITE_ADDRESS: {
    //     type: String
    // },
    // SITE_PHONE: {
    //     type: String
    // },
    // SITE_EMAIL: {
    //     type: String
    // }
    key: {
        type: String
    },

    value: {
        type: String
    }
});

mongoose.model('SiteSettings', SiteSettingsSchema);
let SiteSettings = mongoose.model('SiteSettings');
module.exports = SiteSettings;