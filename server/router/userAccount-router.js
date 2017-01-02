'use strict';

module.exports = function(app, passport, express, data) {
  let userAccountRouter = new express.Router(),
    userAccountController = require('../controllers/userAccount-controller')(data);

  userAccountRouter
    .get('/api/user-accounts', passport.authenticate('jwt'), userAccountController.getUserAccountsDetails)
    .put('/api/user-accounts', passport.authenticate('jwt'), userAccountController.updateUserAccountDetails)
    .post('/api/user-accounts', passport.authenticate('jwt'), userAccountController.addNewAccount)
    .post('/api/user-accounts/:id', passport.authenticate('jwt'), userAccountController.getAccountData);

  app.use(userAccountRouter);
};
