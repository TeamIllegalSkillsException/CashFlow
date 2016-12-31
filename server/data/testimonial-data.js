'use strict';

module.exports = function(models) {
    const Testimonial = models.Testimonial;

    return {
        createTestimonialData(testimonialData) {
            let testimonial = new Testimonial(testimonialData);

            return new Promise((resolve, reject) => {
                testimonial.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(testimonial);
                });
            });
        },
        getAllTestimonial() {
            return new Promise((resolve, reject) => {
                Testimonial.find((err, details) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(details);
                });
            });
        }
    }
};
