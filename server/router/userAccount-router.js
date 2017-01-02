'use strict';

module.exports = function(app, passport, express, data) {
  let userAccountRouter = new express.Router(),
    userAccountController = require('../controllers/userAccount-controller')(data);

  userAccountRouter
    .get('/api/user-accounts', passport.authenticate('jwt'), userAccountController.getUserAccountsDetails)
    .post('/api/user-accounts', passport.authenticate('jwt'), userAccountController.addNewAccount);

  app.use(userAccountRouter);
};
