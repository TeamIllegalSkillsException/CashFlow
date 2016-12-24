'use strict';

module.exports = function(app, express, data) {
    let userRouter = new express.Router(),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .get('/login', userController.getLogin);

    app.use(userRouter);
};
