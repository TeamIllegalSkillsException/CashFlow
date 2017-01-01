'use strict';

module.exports = function(models) {
    const UserIncome = models.UserIncome;

    return {
        createUserIncomeData(userIncomeData) {
            let userIncome = new UserIncome(userIncomeData);

            return new Promise((resolve, reject) => {
                userIncome.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(userIncome);
                });
            });
        },
        getAllUserIncomeData() {
            return new Promise((resolve, reject) => {
                UserIncome.find((err, details) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(details);
                });
            });
        },
        getIncomeByUserId(id) {
            return new Promise((resolve, reject) => {
                UserIncome.findOne({ user_id: id }, (err, income) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!income) {
                        return reject(income);
                    }

                    return resolve(income);
                });
            });
        },
    }
}