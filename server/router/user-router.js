'use strict';

module.exports = function(app, express, data) {
    let userRouter = new express.Router(),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .get('/api/login', userController.getLogin)
        .get('/api/users', userController.getAll);

    app.use(userRouter);
};