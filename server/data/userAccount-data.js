'use strict';

module.exports = function(models) {
    const UserAccount = models.UserAccount;

    return {
          getUserAccountById(userId, accId) {

            return new Promise((resolve, reject) => {
                UserAccount.find({},{ user_id: userId, 'accounts': { $elemMatch: {'_id': accId} }}, (err, user) => {

                    if (err) {
                       return reject(err);
                    }

                    if (!user) {
                        return reject(user);
                    }

                    return resolve(user);
                });
            });
        },
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

                    if (!userWithAccount) {
                      userWithAccount = new UserAccount({
                        user_id: id,
                        accounts: []
                      });
                      userWithAccount.save();

                    } else if(!userWithAccount.accounts) {
                      userWithAccount.bills = [];
                      userWithAccount.save();
                    }

                    let accounts = JSON.parse(JSON.stringify(userWithAccount.accounts));

                    let responseObject = {
                      accounts: accounts
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
        },
        updateUserAccount(updateObj) {
            return new Promise((resolve, reject) => {
                UserAccount.update(
                    {'accounts._id': updateObj._id},
                    {"$set": {
                      "accounts.$.name": updateObj.name,
                      "accounts.$.amount": updateObj.amount }
                    },
                    function(err, numAffected) {
                        if(err) {
                            return reject(err);
                        }
                        
                        return resolve(numAffected);
                    }
                  );
              });
        }
    }
};
