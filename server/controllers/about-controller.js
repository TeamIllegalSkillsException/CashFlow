'use strict'

module.exports = function(data) {
    return {
        getDetails(req, res) {
            const details = req.params;
            return Promise.resolve()
                .then(() => {
                    data.getAll()
                })
                .then((details) => {
                    if (!details) {
                        throw new Error('No details found!');
                    }

                    return res.status(200).json(details);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        }
    }
}