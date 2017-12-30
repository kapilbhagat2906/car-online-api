var variantsModel = require('./variantsModel.js');

/**
* variantsController.js
*
* @description :: Server-side logic for managing variantss.
*/
module.exports = {

    /**
    * variantsController.list()
    */
    list: function (req, res) {
        variantsModel.find(function (err, variantss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting variants.',
                    error: err
                });
            }
            return res.json(variantss);
        });
    },

    /**
    * variantsController.show()
    */
    show: function (req, res) {
        var id = req.params.id;
        variantsModel.findOne({_id: id}, function (err, variants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting variants.',
                    error: err
                });
            }
            if (!variants) {
                return res.status(404).json({
                    message: 'No such variants'
                });
            }
            return res.json(variants);
        });
    },

    /**
    * variantsController.create()
    */
    create: function (req, res) {
        var variants = new variantsModel({
			modelId : req.body.modelId,
			id : req.body.id,
			name : req.body.name,
			code : req.body.code

        });

        variants.save(function (err, variants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating variants',
                    error: err
                });
            }
            return res.status(201).json(variants);
        });
    },

    /**
    * variantsController.update()
    */
    update: function (req, res) {
        var id = req.params.id;
        variantsModel.findOne({_id: id}, function (err, variants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting variants',
                    error: err
                });
            }
            if (!variants) {
                return res.status(404).json({
                    message: 'No such variants'
                });
            }

            variants.modelId = req.body.modelId ? req.body.modelId : variants.modelId;
			variants.id = req.body.id ? req.body.id : variants.id;
			variants.name = req.body.name ? req.body.name : variants.name;
			variants.code = req.body.code ? req.body.code : variants.code;

            variants.save(function (err, variants) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating variants.',
                        error: err
                    });
                }

                return res.json(variants);
            });
        });
    },

    /**
    * variantsController.remove()
    */
    remove: function (req, res) {
        var id = req.params.id;
        variantsModel.findByIdAndRemove(id, function (err, variants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the variants.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
