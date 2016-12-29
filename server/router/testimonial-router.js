'use strict';

module.exports = function(app, passport, express, data) {
    let testimonialRouter = new express.Router(),
        testimonialController = require('../controllers/testimonial-controller')(data);

    testimonialRouter
        .get('/api/testimonials', testimonialController.getTestimonialDetails);

    app.use(testimonialRouter);
};