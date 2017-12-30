var highlightsModel = require('./highlightsModel.js');

/**
* highlightsController.js
*
* @description :: Server-side logic for managing highlightss.
*/
module.exports = {

    /**
    * highlightsController.list()
    */
    list: function (req, res) {
        highlightsModel.find()
        .select('-_id -__v')
        .exec((err, highlightss) => {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting highlights.',
                    error: err
                });
            }
            return res.json(highlightss);
        });
    },

    /**
    * highlightsController.show()
    */
    show: function (req, res) {
        var id = req.params.id;
        highlightsModel.findOne({_id: id}, function (err, highlights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting highlights.',
                    error: err
                });
            }
            if (!highlights) {
                return res.status(404).json({
                    message: 'No such highlights'
                });
            }
            return res.json(highlights);
        });
    },

    /**
    * highlightsController.create()
    */
    create: function (req, res) {
        var highlights = new highlightsModel({
			itemId : req.body.itemId,
			itemType : req.body.itemType,
			infoLink : req.body.infoLink,
			field_image : req.body.field_image

        });

        highlights.save(function (err, highlights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating highlights',
                    error: err
                });
            }
            return res.status(201).json(highlights);
        });
    },

    /**
    * highlightsController.update()
    */
    update: function (req, res) {
        var id = req.params.id;
        highlightsModel.findOne({_id: id}, function (err, highlights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting highlights',
                    error: err
                });
            }
            if (!highlights) {
                return res.status(404).json({
                    message: 'No such highlights'
                });
            }

            highlights.itemId = req.body.itemId ? req.body.itemId : highlights.itemId;
			highlights.itemType = req.body.itemType ? req.body.itemType : highlights.itemType;
			highlights.infoLink = req.body.infoLink ? req.body.infoLink : highlights.infoLink;
			highlights.field_image = req.body.field_image ? req.body.field_image : highlights.field_image;

            highlights.save(function (err, highlights) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating highlights.',
                        error: err
                    });
                }

                return res.json(highlights);
            });
        });
    },

    /**
    * highlightsController.remove()
    */
    remove: function (req, res) {
        var id = req.params.id;
        highlightsModel.findByIdAndRemove(id, function (err, highlights) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the highlights.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
