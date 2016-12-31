'use strict';

module.exports = function(models) {
    const SiteSettings = models.SiteSettings;

    return {
        createSiteSetting(model) {
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
        },
        getSettingByName(settingName) {
            return new Promise((resolve, reject) => {
                SiteSettings.findOne({key: settingName }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(user);
                  });
            });
        }
    }
};
