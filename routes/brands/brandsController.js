var brandsModel = require('./brandsModel.js');

/**
* brandsController.js
*
* @description :: Server-side logic for managing brandss.
*/
module.exports = {

    /**
    * brandsController.list()
    */
    list: function () {
        let promise = new Promise((resolve, reject) => {
            brandsModel.find(function (err, brandss) {
                if (err) {
                    reject ({
                        message: 'Error when getting brands.',
                        error: err
                    });
                }
                resolve(brandss);
            });
        });
        return promise;
    },

    /**
    * brandsController.listTrending()
    * return trending/popular brands.
    */
    listTrending: () => {
        let promise = new Promise((resolve, reject) => {
            brandsModel.find({isTrending: true})
            .select('-isTrending')
            .exec((err, brandss) => {
                if (err) {
                    reject ({
                        message: 'Error when getting trending brands.',
                        error: err
                    });
                }
                resolve(brandss);
            });
        });
        return promise;
    },

    /**
    * brandsController.show()
    */
    show: function (brandId) {
        let promise = new Promise((resolve, reject) => {
            brandsModel.findOne({_id: id}, (err, brandss) => {
                if (err) {
                    reject ({
                        message: 'Error when getting trending brands.',
                        error: err
                    });
                }
                resolve(brandss);
            });
        });
        return promise;
    },

    /**
    * brandsController.create()
    */
    create: function (req, res) {
        var brands = new brandsModel({
			id : req.body.id,
			code : req.body.code,
			name : req.body.name

        });

        brands.save(function (err, brands) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating brands',
                    error: err
                });
            }
            return res.status(201).json(brands);
        });
    },

    /**
    * brandsController.update()
    */
    update: function (req, res) {
        var id = req.params.id;
        brandsModel.findOne({_id: id}, function (err, brands) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting brands',
                    error: err
                });
            }
            if (!brands) {
                return res.status(404).json({
                    message: 'No such brands'
                });
            }

            brands.id = req.body.id ? req.body.id : brands.id;
			brands.code = req.body.code ? req.body.code : brands.code;
			brands.name = req.body.name ? req.body.name : brands.name;

            brands.save(function (err, brands) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating brands.',
                        error: err
                    });
                }

                return res.json(brands);
            });
        });
    },

    /**
    * brandsController.remove()
    */
    remove: function (req, res) {
        var id = req.params.id;
        brandsModel.findByIdAndRemove(id, function (err, brands) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the brands.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
