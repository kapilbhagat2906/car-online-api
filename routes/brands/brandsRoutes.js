var express = require('express');
var router = express.Router();
var brandsController = require('./brandsController.js');

/*
* GET
*/
router.get('/', (req, res) => {
    let promise = brandsController.list();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.status(500).json(response);
    });
});

/*
* GET
*/
router.get('/trending', (req, res) => {
    let promise = brandsController.listTrending();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.status(500).json(error);
    });
});

/*
* GET
*/
router.get('/:id', () => {
    let id = req.params.id;
    let promise = brandsController.show(id);

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        if (error.statusCode || error.statusCode === 0) {
            return res.status(error.statusCode).json(error);
        }
    });
});

/*
* POST
*/
router.post('/', brandsController.create);

/*
* PUT
*/
router.put('/:id', brandsController.update);

/*
* DELETE
*/
router.delete('/:id', brandsController.remove);

module.exports = router;
