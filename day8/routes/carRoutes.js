var express = require('express');
var router = express.Router();
var carController = require('../controllers/carController.js');

/*
 * GET
 */
router.get('/', carController.list);

/*
 * GET
 */
router.get('/:id', carController.show);

/*
 * POST
 */
router.post('/', carController.create);

/*
 * PUT
 */
router.put('/:carId', carController.update);

/*
 * DELETE
 */
router.delete('/:id', carController.remove);

module.exports = router;
