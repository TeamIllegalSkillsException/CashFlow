'use strict';

module.exports = function(models) {
    const BillRecurrence = models.BillRecurrence;

    return {
        createBillRecurrence(data) {
            let billRecurrence = new BillRecurrence(data);

            return new Promise((resolve, reject) => {
                billRecurrence.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(billRecurrence);
                });
            });
        },
        getAllBillRecurrences() {
            return new Promise((resolve, reject) => {
                BillRecurrence.find((error, recurrences) => {
                    if(error) {
                        return reject(error);
                    }

                    return resolve(recurrences);
                })
            });
        }
    }
}