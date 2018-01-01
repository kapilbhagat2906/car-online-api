var express = require('express');
var router = express.Router();
var highlightsController = require('./highlightsController.js');

/*
* GET
*/
router.get('/', (req, res) => {
    let promise = highlightsController.list();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.status(500).json(error);
    });
});

/*
* GET
*/
router.get('/:id', highlightsController.show);

/*
* POST
*/
router.post('/', highlightsController.create);

/*
* PUT
*/
router.put('/:id', highlightsController.update);

/*
* DELETE
*/
router.delete('/:id', highlightsController.remove);

module.exports = router;
