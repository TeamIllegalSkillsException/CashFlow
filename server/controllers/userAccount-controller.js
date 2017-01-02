'use strict';

module.exports = function(data) {

      return {
          getAccountData(req, res) {
            let accountId = req.body.accId;
            let userId = req.body.userId;

            return data.getUserAccountById(userId, accountId)
              .then((accountData) => {

                if (accountData.accounts.length == 0) {
                  res.status(400).json({message: 'No account found'});
                }


                res.status(200).json(accountData);
              })
              .catch((err) => {
                res.status(400).json({ message: err });
              });
          },
          getUserAccountsDetails(req, res) {
              let currentUserId = req.user.id;

              return data.getAccountsByUserId(currentUserId)
                  .then((accountsData) => {
                      if (accountsData.accounts.length == 0) {
                         res.status(400).json({message: 'No accounts'});
                      }

                      res.status(200).json(accountsData);
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
          },
          updateUserAccountDetails(req, res) {

              return data.updateUserAccount(req.body)
                  .then((data) => {
                      if (!data) {
                         throw new Error('User account not found.');
                      }

                      res.status(200).json(data);
                  })
                  .catch(err => {
                      res.status(400).json({ message: err });
                  });

          }
      }
};
