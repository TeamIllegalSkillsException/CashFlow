'use strict';

module.exports = function(models) {
    const About = models.About;

    return {
        createAboutData(aboutData) {
            let about = new About(aboutData);

            return new Promise((resolve, reject) => {
                about.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(about);
                });
            });
        },
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