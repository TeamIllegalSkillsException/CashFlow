'use strict'

module.exports = function(data) {
    return {
        getSiteSettings(req, res) {
            return data.getAllSettings()
                .then((settings) => {
                    if (!settings) {
                        throw new Error('No settings available');
                    }
                    res.status(200).json(settings);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
    }
}