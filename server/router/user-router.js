'use strict';

module.exports = function(app, passport, express, data) {
    let userRouter = new express.Router(),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .post('/api/authenticate', userController.getAuthentication)
        .post('/api/users', passport.authenticate('local'),  userController.getLogin)
        .put('/api/users',  userController.getRegister)
        .get('/api/register', userController.getLogin)
        .get('/api/users', userController.getAll)
        .post('/api/contact-us', userController.sendEmail);

    app.use(userRouter);
};
