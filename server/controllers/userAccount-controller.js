'use strict';

module.exports = function(data) {
    return {
        getUserAccountsDetails(req, res) {
            let currentUserId = req.user.id;
            return data.getAccountsByUserId(currentUserId)
                .then((accounts) => {
                    if (!accounts) {
                       throw new Error('No accounts available');
                    }

                    res.status(200).json(accounts);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });
                });
        },
        addNewAccount(req, res) {
            let currentUserId = req.user.id;
            let accountToAdd = req.body;
            let username = req.user.username;

            let response = {
                sucsess: true,
                username: username
            };

            return data.getAccountsByUserId(currentUserId)
                .then((resObject) => {
                    data.addNewAccountToCurrentUser(accountToAdd, currentUserId)
                        .then((userWithAccounts) => {
                           res.status(200).json(response);
                        });
                });
        }
    }
};
