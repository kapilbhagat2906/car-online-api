var express = require('express');
var router = express.Router();
var modelDetailsController = require('./modelDetailsController.js');

/*
 * GET
 */
router.get('/', modelDetailsController.list);

/*
 * GET
 */
router.get('/:id', (req, res) => {
    var id = req.params.id,
        promise = modelDetailsController.show(id);

    promise.then((response) => {
        return res.json(response);
    }, (error) => {
        return res.status(500).json(error);
    });
});

/*
 * POST
 */
router.post('/', modelDetailsController.create);

/*
 * PUT
 */
router.put('/:id', modelDetailsController.update);

/*
 * DELETE
 */
router.delete('/:id', modelDetailsController.remove);

module.exports = router;
