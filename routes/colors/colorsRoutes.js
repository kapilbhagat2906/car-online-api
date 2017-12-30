var express = require('express');
var router = express.Router();
var colorsController = require('./colorsController.js');

/*
* GET
*/
router.get('/', colorsController.list);

/*
* GET
*/
router.get('/:id', colorsController.show);

/*
* POST
*/
router.post('/', colorsController.create);

/*
* PUT
*/
router.put('/:id', colorsController.update);

/*
* DELETE
*/
router.delete('/:id', colorsController.remove);

module.exports = router;
