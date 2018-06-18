var brandDetailsModel = require('./brandDetailsModel.js');
var brandsModel = require('../brands/brandsModel.js');
var modelDetailsController = require('../modelDetails/modelDetailsController');

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
            var modelDetailsArray = [];

            brandDetailsModel.findOne({'brandId': brandId}, function (err, brandDetails) {
                if (err) {
                    return reject({
                        message: 'Error when getting brandDetails.',
                        error: err,
                        statusCode: 500
                    });
                }
                if (!brandDetails) {
                    return reject({
                        message: 'No such brandDetails',
                        statusCode: 404
                    });
                }
                if (brandDetails.brands) {
                    promises.push(brandsModel.find(
                        {'id': { $in: brandDetails.brands }},
                        (err, brandsInfo) => {
                            if (!err) {
                                brandDetails.brands = brandsInfo;
                            }
                        }
                    ));
                }
                if (brandDetails.models) {
                    brandDetails.models.forEach(model => {
                        var modelDetailsPromise = modelDetailsController.show(model);

                        promises.push(modelDetailsPromise);
                        modelDetailsPromise.then((modelDetails) => {
                            modelDetailsArray.push(modelDetails);
                        });
                    });
                }
                Promise.all(promises).then((response) => {
                    brandDetails.models = modelDetailsArray;
                    return resolve(brandDetails);
                }, (error) => {
                    return reject({
                        message: 'Error when getting homepage data.',
                        error: err
                    });
                });
            });
        });
        return promise;
    }
};
