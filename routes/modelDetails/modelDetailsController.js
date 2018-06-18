var modelDetailsModel = require('./modelDetailsModel.js');
var modelsController = require('../models/modelsController.js');

/**
 * modelDetailsController.js
 *
 * @description :: Server-side logic for managing modelDetailss.
 */
module.exports = {

    /**
     * modelDetailsController.list()
     */
    list: function (req, res) {
        modelDetailsModel.find(function (err, modelDetailss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting modelDetails.',
                    error: err
                });
            }
            return res.json(modelDetailss);
        });
    },

    /**
     * modelDetailsController.show()
     */
    show: function (id) {
        var modelOverviewPromise = modelsController.show(id);
        var modelCompleteDetails = {};

        let promise = new Promise((resolve, reject) => {
            modelOverviewPromise.then((modelOverview) => {
                modelDetailsModel.findOne({modelId: id}, function (err, modelDetails) {
                    if (err) {
                        reject({
                            message: 'Error when getting models.',
                            error: err
                        });
                    }
                    modelCompleteDetails = {
                        'modelDetails': modelDetails,
                        'modelOverview': modelOverview
                    };
                    resolve(modelCompleteDetails);
                });
            });
        });

        return promise;
    },

    /**
     * modelDetailsController.create()
     */
    create: function (req, res) {
        var modelDetails = new modelDetailsModel({
			modelId : req.body.modelId,
			description : req.body.description,
			price : req.body.price,
			mileage : req.body.mileage,
			engine : req.body.engine,
			gears : req.body.gears,
			serviceCost : req.body.serviceCost,
			cylinders : req.body.cylinders,
			seating : req.body.seating,
			powerSteering : req.body.powerSteering,
			centeralLock : req.body.centeralLock,
			brakeAssist : req.body.brakeAssist,
			airbags : req.body.airbags,
			parkingSensor : req.body.parkingSensor,
			topSpeed : req.body.topSpeed,
			bhp : req.body.bhp,
			images : req.body.images

        });

        modelDetails.save(function (err, modelDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating modelDetails',
                    error: err
                });
            }
            return res.status(201).json(modelDetails);
        });
    },

    /**
     * modelDetailsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        modelDetailsModel.findOne({_id: id}, function (err, modelDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting modelDetails',
                    error: err
                });
            }
            if (!modelDetails) {
                return res.status(404).json({
                    message: 'No such modelDetails'
                });
            }

            modelDetails.modelId = req.body.modelId ? req.body.modelId : modelDetails.modelId;
			modelDetails.description = req.body.description ? req.body.description : modelDetails.description;
			modelDetails.price = req.body.price ? req.body.price : modelDetails.price;
			modelDetails.mileage = req.body.mileage ? req.body.mileage : modelDetails.mileage;
			modelDetails.engine = req.body.engine ? req.body.engine : modelDetails.engine;
			modelDetails.gears = req.body.gears ? req.body.gears : modelDetails.gears;
			modelDetails.serviceCost = req.body.serviceCost ? req.body.serviceCost : modelDetails.serviceCost;
			modelDetails.cylinders = req.body.cylinders ? req.body.cylinders : modelDetails.cylinders;
			modelDetails.seating = req.body.seating ? req.body.seating : modelDetails.seating;
			modelDetails.powerSteering = req.body.powerSteering ? req.body.powerSteering : modelDetails.powerSteering;
			modelDetails.centeralLock = req.body.centeralLock ? req.body.centeralLock : modelDetails.centeralLock;
			modelDetails.brakeAssist = req.body.brakeAssist ? req.body.brakeAssist : modelDetails.brakeAssist;
			modelDetails.airbags = req.body.airbags ? req.body.airbags : modelDetails.airbags;
			modelDetails.parkingSensor = req.body.parkingSensor ? req.body.parkingSensor : modelDetails.parkingSensor;
			modelDetails.topSpeed = req.body.topSpeed ? req.body.topSpeed : modelDetails.topSpeed;
			modelDetails.bhp = req.body.bhp ? req.body.bhp : modelDetails.bhp;
			modelDetails.images = req.body.images ? req.body.images : modelDetails.images;

            modelDetails.save(function (err, modelDetails) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating modelDetails.',
                        error: err
                    });
                }

                return res.json(modelDetails);
            });
        });
    },

    /**
     * modelDetailsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        modelDetailsModel.findByIdAndRemove(id, function (err, modelDetails) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the modelDetails.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
