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
        addNewIncome(req, res) {
            let currentUserId = req.user.id;
            let incomeToAdd = req.body;
            let username = req.user.username;

            let response = {
                sucsess: true,
                username: username
            }

            return data.getIncomeByUserId(currentUserId)
                .then((resObject) => {
                    data.addNewIncomeToCurrentUser(incomeToAdd, currentUserId)
                        .then((userWithIncome) => {
                            res.status(200).json(response);
                        });
                });
        },
        getIncomeRecurrences(req, res) {
            return data.getAllIncomeRecurrences()
                .then((recurrences) => {
                    let response = {
                        success: true,
                        recurrences: recurrences
                    }
                    res.status(200).json(response);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                })
        }

    }
}