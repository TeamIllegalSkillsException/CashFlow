'use strict';

module.exports = function(app, passport, express, data) {
    let userRouter = new express.Router(),
        userController = require('../controllers/user-controller')(data);

    userRouter
        .get('/api/users', passport.authenticate('jwt'), userController.getAll)
        .post('/api/users', passport.authenticate('local'), userController.getLogin)
        .put('/api/users',  userController.getRegister)
        .post('/api/authenticate', userController.getAuthentication)
        .post('/api/contact-us', passport.authenticate('jwt'), userController.sendEmail);

    app.use(userRouter);
};
