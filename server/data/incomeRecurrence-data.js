'use strict';

module.exports = function(models) {
    const IncomeRecurrence = models.IncomeRecurrence;

    return {
        createIncomeRecurrence(data) {
            let incomeRecurrence = new IncomeRecurrence(data);

            return new Promise((resolve, reject) => {
                incomeRecurrence.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(incomeRecurrence);
                });
            });
        },
        getAllIncomeRecurrences() {
            return new Promise((resolve, reject) => {
                IncomeRecurrence.find((error, recurrences) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(recurrences);
                })
            });
        }
    }
}