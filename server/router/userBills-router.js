'use strict';

module.exports = function(app, passport, express, data) {
    let userBillsRouter = new express.Router(),
        userBillsController = require('../controllers/userBills-controller')(data);

    userBillsRouter        
        .get('/api/user-bills', passport.authenticate('jwt'), userBillsController.getUserBillsDetails)
        .post('/api/user-bills', passport.authenticate('jwt'), userBillsController.addNewBill) 
        .get('/api/bill-categories', passport.authenticate('jwt'), userBillsController.getBillCategories)      
        .get('/api/bill-recurrences', passport.authenticate('jwt'), userBillsController.getBillRecurrences)
        .put('/api/update-bill', passport.authenticate('jwt'), userBillsController.updateBill);                               

    app.use(userBillsRouter);
};
