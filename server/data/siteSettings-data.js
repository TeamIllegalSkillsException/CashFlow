'use strict';

module.exports = function(models) {
    const SiteSettings = models.SiteSettings;

    return {
        createee(model) {
            let s = new SiteSettings(model);

            return new Promise((resolve, reject) => {
                s.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(s);
                });
            });
        },
        getAllSettings() {
            return new Promise((resolve, reject) => {
                SiteSettings.find((err, result) => {
                    if(err) {
                        return reject(err);
                    }

                    return resolve(result);
                })
            });
        }
    }
}
