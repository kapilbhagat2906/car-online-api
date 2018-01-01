var HomeModel = require('./homeModel.js');
var brandsController = require('../brands/brandsController.js');
var highlightsController = require('../highlights/highlightsController.js');
var modelsController = require('../models/modelsController.js');

/**
 * homeController.js
 *
 * @description :: Server-side logic for managing homes.
 */
module.exports = {

    /**
     * homeController.data()
     * returns all data for homepage.
     */
    data: function () {
        let homeResponseObj = new HomeModel();
        let trendingBrandspromise = brandsController.listTrending();
        let highlightsPromise = highlightsController.list();
        let modelsPromise = modelsController.listTrending();
        let promises = [trendingBrandspromise, highlightsPromise, modelsPromise];
        let promise = new Promise((resolve, reject) => {
            Promise.all(promises).then((response) => {
                resolve(homeResponseObj);
            }, (error) => {
                reject({
                    message: 'Error when getting homepage data.',
                    error: err
                });
            });
        });

        trendingBrandspromise.then((response) => {
            homeResponseObj.trending.brands = response;
        });
        highlightsPromise.then((response) => {
            homeResponseObj.highlights = response;
        });
        modelsPromise.then((response) => {
            homeResponseObj.trending.models = response;
        });

        return promise;
    },

    /**
     * homeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        homeModel.findOne({_id: id}, function (err, home) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting home.',
                    error: err
                });
            }
            if (!home) {
                return res.status(404).json({
                    message: 'No such home'
                });
            }
            return res.json(home);
        });
    },

    /**
     * homeController.create()
     */
    create: function (req, res) {
        var home = new homeModel({
			highlights : req.body.highlights,
			trendingBrands : req.body.trendingBrands,
			trendingCars : req.body.trendingCars

        });

        home.save(function (err, home) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating home',
                    error: err
                });
            }
            return res.status(201).json(home);
        });
    },

    /**
     * homeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        homeModel.findOne({_id: id}, function (err, home) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting home',
                    error: err
                });
            }
            if (!home) {
                return res.status(404).json({
                    message: 'No such home'
                });
            }

            home.highlights = req.body.highlights ? req.body.highlights : home.highlights;
			home.trendingBrands = req.body.trendingBrands ? req.body.trendingBrands : home.trendingBrands;
			home.trendingCars = req.body.trendingCars ? req.body.trendingCars : home.trendingCars;

            home.save(function (err, home) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating home.',
                        error: err
                    });
                }

                return res.json(home);
            });
        });
    },

    /**
     * homeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        homeModel.findByIdAndRemove(id, function (err, home) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the home.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
