'use strict';

module.exports = function(app, passport, express, data) {
    let siteSettingsRouter = new express.Router(),
        siteSettingsController = require('../controllers/siteSettings-controller')(data);

    siteSettingsRouter
        .get('/api/siteSettings', siteSettingsController.getSiteSettings);

    app.use(siteSettingsRouter);
};
