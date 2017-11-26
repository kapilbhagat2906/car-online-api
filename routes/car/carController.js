var carModel = require('./carModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

    /**
     * carController.list()
     */
    list: function (req, res) {
        carModel.find(function (err, cars) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            return res.json(cars);
        });
    },

    /**
     * carController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car.',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }
            return res.json(car);
        });
    },

    /**
     * carController.create()
     */
    create: function (req, res) {
        var car = new carModel({
			id : req.body.id,
			name : req.body.name,
			code : req.body.code,
			price : req.body.price,
			info : req.body.info,
			field_cover_image : req.body.field_cover_image,
			models : req.body.models,
			related : req.body.related

        });

        car.save(function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating car',
                    error: err
                });
            }
            return res.status(201).json(car);
        });
    },

    /**
     * carController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        carModel.findOne({_id: id}, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting car',
                    error: err
                });
            }
            if (!car) {
                return res.status(404).json({
                    message: 'No such car'
                });
            }

            car.id = req.body.id ? req.body.id : car.id;
			car.name = req.body.name ? req.body.name : car.name;
			car.code = req.body.code ? req.body.code : car.code;
			car.price = req.body.price ? req.body.price : car.price;
			car.info = req.body.info ? req.body.info : car.info;
			car.field_cover_image = req.body.field_cover_image ? req.body.field_cover_image : car.field_cover_image;
			car.models = req.body.models ? req.body.models : car.models;
			car.related = req.body.related ? req.body.related : car.related;
			
            car.save(function (err, car) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating car.',
                        error: err
                    });
                }

                return res.json(car);
            });
        });
    },

    /**
     * carController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        carModel.findByIdAndRemove(id, function (err, car) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the car.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
