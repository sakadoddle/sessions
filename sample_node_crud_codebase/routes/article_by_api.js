var express = require('express');
var router = express.Router();
var articleControllerByApi = require('../controllers/articleControllerApi');

/*
 * GET
 */
router.get('/', articleControllerByApi.list);

/*
 * GET
 */
router.get('/:id', articleControllerByApi.show);

/*
 * POST
 */
router.post('/', articleControllerByApi.create);

/*
 * PUT
 */
router.put('/:id', articleControllerByApi.update);

/*
 * DELETE
 */
router.delete('/:id', articleControllerByApi.remove);

module.exports = router;
