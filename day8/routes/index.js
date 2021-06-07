var express = require('express');
var router = express.Router();

// GET  http://localhost:3000/firstPath/
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'MEro apge' });
});

// POST  http://localhost:3000/firstPath/
router.post('/', function (req, res, next) {
  res.render('index', { title: 'POST METHOD' });
});


// POST  http://localhost:3000/firstPath/
router.delete('/', function (req, res, next) {
  res.render('index', { title: 'DELETE METHOD' });
});


//  http://localhost:3000/firstPath/secondPath'
router.get('/secondPath', function (req, res, next) {
  res.render('index', { title: 'test' });
});


//  http://localhost:3000/test/abcv/tasdasd
router.get('/secondPath/thirdpath/foruthpath', function (req, res, next) {
  res.render('index', { title: 'test' });
});


module.exports = router;
