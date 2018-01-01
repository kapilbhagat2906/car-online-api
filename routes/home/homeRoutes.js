var express = require('express');
var router = express.Router();
var homeController = require('./homeController.js');

/*
 * GET
 */
router.get('/', (req, res) => {
    let promise = homeController.data();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.json(error);
    });
});

/*
 * GET
 */
router.get('/:id', homeController.show);

module.exports = router;
