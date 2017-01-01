'use strict';

module.exports = function(app, passport, express, data) {
    let userRouter = new express.Router(),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .get('/api/users', passport.authenticate('jwt'), userController.getProfile)
        .get('/api/logout', passport.authenticate('jwt'), userController.logout)
        .post('/api/users', passport.authenticate('local'), userController.getLogin)
        .put('/api/users',  userController.getRegister)
        .post('/api/authenticate', userController.getAuthentication)
        .post('/api/contact-us', passport.authenticate('jwt'), userController.sendEmail)
        .put('/api/forgotten-pass', userController.sendNewAutoGeneratedPassword);

    app.use(userRouter);
};
