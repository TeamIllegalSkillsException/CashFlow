'use strict';

module.exports = function(models) {
    const UserAccount = models.UserAccount;

    return {
        createUserAccount(userAccountData){
            let userAccount = new UserAccount(userAccountData);

            return new Promise((resolve, reject) => {
                userAccount.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                  return resolve(userAccount);
                });
            });
        },
        getAccountsByUserId(id) {
            return new Promise((resolve, reject) => {
                UserAccount.findOne({ user_id: id }, (err, userWithAccount) => {
                    if (err) {
                       return reject(err);
                    }

                    let responseObject = {
                       accounts: userWithAccount.accounts
                    };

                    return resolve(responseObject);
                });
            });
        },
        addNewAccountToCurrentUser(accountToAdd, userId) {
            return new Promise((resolve, reject) => {
                UserAccount.findOne({ user_id: userId }, (err, userWithAccount) => {
                    if (err) {
                       return reject(err);
                    }

                    userWithAccount.accounts.push(accountToAdd);
                    userWithAccount.save();

                    return resolve(userWithAccount);
                });
            });
          }
    }
};
