'use strict';

module.exports = function(models) {
    const UserBills = models.UserBills;

    return {
        createUserBill(userBillData){
            let userBill = new UserBills(userBillData);

            return new Promise((resolve, reject) => {
                userBill.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(userBill);
                });
            });
        },
        getBillsByUserId(id) {
            return new Promise((resolve, reject) => {
                UserBills.findOne({ user_id: id }, (err, userWithBills) => {                          
                    if (err) {
                        return reject(err);
                    }

                    if (!userWithBills) {
                        userWithBills = new UserBills({
                            user_id: id,
                            bills: []
                        });
                        userWithBills.save();
                                                
                    } else if(!userWithBills.bills) {
                        userWithBills.bills = [];
                        userWithBills.save();
                    }

                    let bills = userWithBills.bills;
                    let responseObject = {
                        bills: bills
                    }
                   
                    return resolve(responseObject);
                });
            });
        },
        addNewBillToCurrentUser(billToAdd, userId) {
            return new Promise((resolve, reject) => {
                UserBills.findOne({ user_id: userId }, (err, userWithBills) => {                                 
                    if (err) {
                        return reject(err);
                    }                    

                    userWithBills.bills.push(billToAdd);
                    userWithBills.save();
                   
                    return resolve(userWithBills);
                });
            });
        }
    }
}