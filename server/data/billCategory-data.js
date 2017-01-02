'use strict';

module.exports = function(models) {
    const BillCategory = models.BillCategory;

    return {
        createBillCategory(data) {
            let billCategory = new BillCategory(data);

            return new Promise((resolve, reject) => {
                billCategory.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(billCategory);
                });
            });
        },
        getAllBillCategories() {
            return new Promise((resolve, reject) => {
                BillCategory.find((error, categories) => {
                    if(error) {
                        return reject(error);
                    }
                    
                    return resolve(categories);
                })
            });
        }
    }
}