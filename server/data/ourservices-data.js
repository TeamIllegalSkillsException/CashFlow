'use strict';

module.exports = function(models) {
    const OurServices = models.OurServices;
<<<<<<< HEAD

=======
  
>>>>>>> ebcab4ec8dfec45d11e7a24a1424758ec31653b9
    return {
        createOurServicesData(ourServicesData) {
            let ourServices = new OurServices(ourServicesData);

            return new Promise((resolve, reject) => {
                ourServices.save((error) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(ourServices);
                });
            });
        },
        getAllOurServices() {
            return new Promise((resolve, reject) => {
                OurServices.find((err, details) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(details);
                });
            });
        }
    }
}
