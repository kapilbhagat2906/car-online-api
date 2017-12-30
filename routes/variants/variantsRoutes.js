var express = require('express');
var router = express.Router();
var variantsController = require('./variantsController.js');

/*
* GET
*/
router.get('/', variantsController.list);

/*
* GET
*/
router.get('/:id', variantsController.show);

/*
* POST
*/
router.post('/', variantsController.create);

/*
* PUT
*/
router.put('/:id', variantsController.update);

/*
* DELETE
*/
router.delete('/:id', variantsController.remove);

module.exports = router;
