var express = require('express');
var router = express.Router();
var carsController = require('./carsController.js');

/*
* GET
*/
router.get('/getAll', carsController.list);

/*
* GET
*/
router.get('/:id', carsController.show);

/*
* POST
*/
router.post('/', carsController.create);

/*
* PUT
*/
router.put('/:id', carsController.update);

/*
* DELETE
*/
router.delete('/:id', carsController.remove);

module.exports = router;
