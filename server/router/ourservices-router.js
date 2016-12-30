'use strict';

module.exports = function(app, passport, express, data) {
    let ourServicesRouter = new express.Router(),
        ourServicesController = require('../controllers/ourservices-controller')(data);

    ourServicesRouter
        .get('/api/services', ourServicesController.getOurServicesDetails);

    app.use(ourServicesRouter);
};