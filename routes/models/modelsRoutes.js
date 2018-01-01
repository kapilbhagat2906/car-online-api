var express = require('express');
var router = express.Router();
var modelsController = require('./modelsController.js');

/*
* GET
*/
router.get('/', () => {
    let promise = modelsController.list();

    promise.then((response) => {
        console.log(response);
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
        console.log(response);
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
router.get('/:id', modelsController.show);

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
