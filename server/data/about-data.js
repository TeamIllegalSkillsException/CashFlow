'use strict';

module.exports = function(models) {
    const About = models.About;

    return {
        getAll() {
            return new Promise((resolve, reject) => {
                About.find((err, details) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(details);
                });
            });
        }
    }
}