'use strict';

module.exports = function(data) {
    return {
        getUserBillsDetails(req, res) {       
            let currentUserId = req.user.id;
            return data.getBillsByUserId(currentUserId)                
                .then((bills) => {
                    if (!bills) {
                        throw new Error('No bills available');
                    }
                          
                    res.status(200).json(bills);
                })
                .catch((err) => {                    
                    res.status(400).json({ message: err.message });
                });
        },
        addNewBill(req, res) {
            let currentUserId = req.user.id;
            let billToAdd = req.body;   
            let username = req.user.username;   

            let response = {
                sucsess: true,
                username: username
            }

            return data.getBillsByUserId(currentUserId)
                .then((resObject) => {
                        data.addNewBillToCurrentUser(billToAdd, currentUserId)
                            .then((userWithBills) => {                                
                                res.status(200).json(response);
                            });
                });            
        },
        getBillCategories(req, res) {
            return data.getAllBillCategories()
                .then((categories) => {
                    let response = {
                        success: true,
                        categories: categories
                    }
                    res.status(200).json(response);
                })
                .catch((err) => {
                    res.status(400).json({ message: err.message });                    
                })
        },
        getBillRecurrences(req, res) {
            return data.getAllBillRecurrences()
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
