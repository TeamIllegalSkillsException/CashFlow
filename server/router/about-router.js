'use strict';

module.exports = function(app, express, data) {
    let aboutController = require('../controllers/about-controller')(data);
    let aboutRouter = new express.Router();


    aboutRouter
        .get('/api/about', aboutController.getDetails);

    app.use(aboutRouter);
};