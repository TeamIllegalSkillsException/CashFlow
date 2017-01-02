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
                UserIncome.findOne({ user_id: id }, (err, userWithIncome) => {
                    if (err) {
                        return reject(err);
                    }

                    if (!userWithIncome) {
                        userWithIncome = new UserIncome({
                            user_id: id,
                            incomes: []
                        });
                        userWithIncome.save();

                    } else if (!userWithIncome.incomes) {
                        userWithIncome.incomes = [];
                        userWithIncome.save();
                    }

                    let incomes = userWithIncome.incomes;
                    let responseObject = {
                        incomes: incomes
                    }

                    return resolve(responseObject);
                });
            });
        },
        addNewIncomeToCurrentUser(incomeToAdd, userId) {
            return new Promise((resolve, reject) => {
                UserIncome.findOne({ user_id: userId }, (err, userWithIncomes) => {
                    if (err) {
                        return reject(err);
                    }

                    userWithIncomes.incomes.push(incomeToAdd);
                    userWithIncomes.save();

                    return resolve(userWithIncomes);
                });
            });
        },
        getAllIncomeRecurrences() {
            return new Promise((resolve, reject) => {
                UserIncome.find((error, recurrences) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(recurrences);
                })
            });
        }
    }
}