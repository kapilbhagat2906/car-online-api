var colorsModel = require('./colorsModel.js');

/**
* colorsController.js
*
* @description :: Server-side logic for managing colorss.
*/
module.exports = {

    /**
    * colorsController.list()
    */
    list: function (req, res) {
        colorsModel.find(function (err, colorss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colors.',
                    error: err
                });
            }
            return res.json(colorss);
        });
    },

    /**
    * colorsController.show()
    */
    show: function (req, res) {
        var id = req.params.id;
        colorsModel.findOne({_id: id}, function (err, colors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colors.',
                    error: err
                });
            }
            if (!colors) {
                return res.status(404).json({
                    message: 'No such colors'
                });
            }
            return res.json(colors);
        });
    },

    /**
    * colorsController.create()
    */
    create: function (req, res) {
        var colors = new colorsModel({
			modelId : req.body.modelId,
			variantId : req.body.variantId,
			code : req.body.code,
			name : req.body.name

        });

        colors.save(function (err, colors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating colors',
                    error: err
                });
            }
            return res.status(201).json(colors);
        });
    },

    /**
    * colorsController.update()
    */
    update: function (req, res) {
        var id = req.params.id;
        colorsModel.findOne({_id: id}, function (err, colors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting colors',
                    error: err
                });
            }
            if (!colors) {
                return res.status(404).json({
                    message: 'No such colors'
                });
            }

            colors.modelId = req.body.modelId ? req.body.modelId : colors.modelId;
			colors.variantId = req.body.variantId ? req.body.variantId : colors.variantId;
			colors.code = req.body.code ? req.body.code : colors.code;
			colors.name = req.body.name ? req.body.name : colors.name;

            colors.save(function (err, colors) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating colors.',
                        error: err
                    });
                }

                return res.json(colors);
            });
        });
    },

    /**
    * colorsController.remove()
    */
    remove: function (req, res) {
        var id = req.params.id;
        colorsModel.findByIdAndRemove(id, function (err, colors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the colors.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
