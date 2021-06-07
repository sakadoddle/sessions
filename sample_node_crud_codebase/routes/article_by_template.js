var express = require('express');
var router = express.Router();
var articleControllerByTemplate = require('../controllers/articleControllerTemplate');


router.get('/', articleControllerByTemplate.list);


router.get('/add', articleControllerByTemplate.addForm);



router.get('/:id', articleControllerByTemplate.show);


router.post('/addAction', articleControllerByTemplate.create);


router.get('/edit/:id', articleControllerByTemplate.editForm);

router.post('/editAction', articleControllerByTemplate.update);


router.get('/delete/:id', articleControllerByTemplate.remove);

module.exports = router;
