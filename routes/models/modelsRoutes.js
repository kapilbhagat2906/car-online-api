var express = require('express');
var router = express.Router();
var modelsController = require('./modelsController.js');

/*
* GET
*/
router.get('/', modelsController.list);

/*
* GET
*/
router.get('/trending', modelsController.listTrending);

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
