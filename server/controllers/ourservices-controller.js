'use strict'

module.exports = function(data) {
    return {
        getOurServicesDetails(req, res) {
            return data.getAllOurServices()
                .then((listings) => {
                    if (!listings) {
                        throw new Error('No items available');
                    }
                    res.status(200).json(listings);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
    }
}