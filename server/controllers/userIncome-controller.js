'use strict'

module.exports = function(data) {
    return {
        getUserIncomeDetails(req, res) {
            return data.getAllUserIncomeData()
                .then((listings) => {
                    if (!listings) {
                        throw new Error('No items available');
                    }
                    res.status(200).json(listings);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        },
        updateUserIncomeDetailsById(req, res, next) {
            const errors = req.validationErrors();

            if (errors) {
                return res.redirect("/user-income");
            }
            UserIncome.findById(req.userIncome.user_id, (err, userIncome) => {
                if (err) {
                    return next(err);
                }
                userIncome.incomes.company = req.body.company || "";
                userIncome.incomes.amount = req.body.amount || "";
                userIncome.incomes.startDate = req.body.startDate || "";
                userIncome.incomes.accounts = req.body.accounts || "";
                userIncome.incomes.recurrence = req.body.recurrence || "";
                userIncome.save((err) => {
                    if (err) {
                        if (err.code === 11000) {
                            return res.redirect("/user-income");
                        }
                        return next(err);
                    }
                    res.redirect("/user-income");
                });
            });
        },
    }
}