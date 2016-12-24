'use strict';

module.exports = function () {
    return {
        home(req, res) {
            console.log('user');
            res.status(200).json({asds: "asdasd"});
        }
    };
};
