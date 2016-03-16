var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index.html');
});

router.post('/negation', function (req, res) {
  var number = parseFloat(req.body.number);
  var negativeNumber = -number;
  res.send('' + negativeNumber);
});

router.post('/percent', function(req, res) {
  var number = parseFloat(req.body.number);
  var precentNumber = number / 100;
  res.send('' + precentNumber);
});


module.exports = router;
