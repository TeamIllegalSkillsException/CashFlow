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

                    let bills = JSON.parse(JSON.stringify(userWithBills.bills));

                    let responseObject = {
                        bills: bills
                    };

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
        },
        getBillsByUserIdAndUpdateBill(billToUpdate, idOfUser) {
            return new Promise((resolve, reject) => {
                UserBills.findOne({ user_id: idOfUser }, (err, userWithBills) => {
                    let bills = userWithBills.bills;
                    
                    for(let i = 0; i < bills.length; i+=1) {
                        
                        if(String(bills[i]._id) === String(billToUpdate._id)) {
                            
                            userWithBills.bills[i].amount = billToUpdate.amount;
                           // userWithBills.bills[i].startDueDate = billToUpdate.startDueDate;
                           // userWithBills.bills[i].endDueDate = billToUpdate.endDueDate;
                            userWithBills.bills[i].recurrence = billToUpdate.recurrence;
                            userWithBills.bills[i].category = billToUpdate.category;
                            userWithBills.bills[i].notes = billToUpdate.notes;                            
                            
                            userWithBills.save();

                            break;
                        }
                    }

                    let responseObject = {
                        success: true
                    }

                    return resolve(responseObject);
                });
            });
            
        }
    }
}
