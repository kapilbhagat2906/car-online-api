var brandDetailsModel = require('./brandDetailsModel.js');

/**
 * brandDetailsController.js
 *
 * @description :: Server-side logic for managing brandDetailss.
 */
module.exports = {

    /**
     * brandDetailsController.show()
     */
    show: function (brandId) {
        let promise = new Promise((resolve, reject) => {
            let promises = [];
            brandDetailsModel.findOne({brandId: brandId}, function (err, brandDetails) {
                if (err) {
                    reject({
                        message: 'Error when getting brandDetails.',
                        error: err,
                        statusCode: 500
                    });
                }
                if (!brandDetails) {
                    reject({
                        message: 'No such brandDetails',
                        statusCode: 404
                    });
                }
                if (brandDetails.brands) {
                    promises.push(brandDetailsModel.find({
                        'brandId': { $in: brandDetails.brands }
                    })
                    .select('-brands -models')
                    .exec((err, brandsInfo) => {
                        if (!err) {
                            brandDetails.brands = brandsInfo;
                        }
                    }));
                }
                Promise.all(promises).then((response) => {
                    resolve(brandDetails);
                }, (error) => {
                    reject({
                        message: 'Error when getting homepage data.',
                        error: err
                    });
                });
            });
        });
        return promise;
    }
};
