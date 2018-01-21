var express = require('express');
var router = express.Router();
var brandDetailsController = require('./brandDetailsController.js');

/*
 * GET
 */
router.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = brandDetailsController.show(id);

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        if (error.statusCode || error.statusCode === 0) {
            return res.status(error.statusCode).json(error);
        }
    });
});

module.exports = router;
