var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/nested', function (req, res, next) {
  res.send('Nested espond with a resource');
});


router.get('/nested/:dyanmic', function (req, res, next) {
  const parmas = req.params.dyanmic;
  res.render('user', {
    dynamic: 'Simple text',
    showtext: false,
    data: [{
      title: 'Bitcoin',
      desc: 'Crypto'
    }, {
      title: 'Apple',
      desc: 'Tech'
    }]
  });
});

module.exports = router;


