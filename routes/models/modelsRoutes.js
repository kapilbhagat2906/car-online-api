var express = require('express');
var router = express.Router();
var modelsController = require('./modelsController.js');

/*
* GET
*/
router.get('/', (req, res) => {
    let promise = modelsController.list();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.json(error);
    });
});

/*
* GET
*/
router.get('/trending', (req, res) => {
    let promise = modelsController.listTrending();

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.json(error);
    });
});

/*
* GET
*/
router.get('/brandModels', modelsController.listBrandModels);

/*
* GET
*/
router.get('/:id', (req, res) => {
    var id = req.params.id,
        promise = modelsController.show(id);

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.status(500).json(error);
    });
});

/*
* POST
*/
router.post('/', modelsController.create);

/*
* PUT
*/
router.put('/:id', modelsController.update);

/*
* DELETE
*/
router.delete('/:id', modelsController.remove);

module.exports = router;
