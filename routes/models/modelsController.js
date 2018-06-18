var modelsModel = require('./modelsModel.js');

/**
* modelsController.js
*
* @description :: Server-side logic for managing modelss.
*/
module.exports = {

    /**
    * modelsController.list()
    */
    list: function () {
        let promise = new Promise((resolve, reject) => {
            modelsModel.find(function (err, modelss) {
                if (err) {
                    reject({
                        message: 'Error when getting models.',
                        error: err
                    });
                }
                resolve(modelss);
            });
        });
        return promise;
    },

    /**
    * modelsController.listTrending()
    */
    listTrending: function () {
        let promise = new Promise((resolve, reject) => {
            modelsModel.find({isTrending: true})
            .select('-isTrending')
            .exec((err, modelss) => {
                if (err) {
                    reject({
                        message: 'Error when getting models.',
                        error: err
                    });
                }
                resolve(modelss);
            });
        });
        return promise;
    },

    /**
    * modelsController.listBrandModels()
    * returns models for selected brand.
    */
    listBrandModels: (req, res) => {
        let brandId = req.query.brandId;

        modelsModel.find({brandId : brandId})
        .select('-isTrending -brandId -_id -__v')
        .exec((err, modelss) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting models.',
                    error: err
                });
            }
            return res.json(modelss);
        });
    },

    /**
    * modelsController.show()
    */
    show: function (id) {
        let promise = new Promise((resolve, reject) => {
            modelsModel.findOne({id: id})
            .exec((err, model) => {
                if (err) {
                    reject ({
                        message: 'Error when getting models.',
                        error: err
                    });
                }
                resolve(model);
            });
        });
        return promise;
    },

    /**
    * modelsController.create()
    */
    create: function (req, res) {
        var models = new modelsModel({
			brandId : req.body.brandId,
			id : req.body.id,
			name : req.body.name,
			code : req.body.code

        });

        models.save(function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating models',
                    error: err
                });
            }
            return res.status(201).json(models);
        });
    },

    /**
    * modelsController.update()
    */
    update: function (req, res) {
        var id = req.params.id;
        modelsModel.findOne({_id: id}, function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting models',
                    error: err
                });
            }
            if (!models) {
                return res.status(404).json({
                    message: 'No such models'
                });
            }

            models.brandId = req.body.brandId ? req.body.brandId : models.brandId;
			models.id = req.body.id ? req.body.id : models.id;
			models.name = req.body.name ? req.body.name : models.name;
			models.code = req.body.code ? req.body.code : models.code;

            models.save(function (err, models) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating models.',
                        error: err
                    });
                }

                return res.json(models);
            });
        });
    },

    /**
    * modelsController.remove()
    */
    remove: function (req, res) {
        var id = req.params.id;
        modelsModel.findByIdAndRemove(id, function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the models.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
