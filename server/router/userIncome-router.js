'use strict';

module.exports = function(app, passport, express, data) {
    let userIncomeRouter = new express.Router(),
        userIncomeController = require('../controllers/userIncome-controller')(data);

    userIncomeRouter
        .get('/api/user-income', userIncomeController.getUserIncomeDetails)
        .post('/api/user-income', userIncomeController.updateUserIncomeDetailsById);

    app.use(userIncomeRouter);
};