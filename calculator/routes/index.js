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

router.post('/sum', function(req, res) {
  var number1 = parseFloat(req.body.number1);
  var number2 = parseFloat(req.body.number2);
  var result = number1 + number2;
  res.send('' + result);
});

router.post('/sub', function(req, res) {
  var number1 = parseFloat(req.body.number1);
  var number2 = parseFloat(req.body.number2);
  var result = number1 - number2;
  res.send('' + result);
});

router.post('/multiply', function(req, res) {
  var number1 = parseFloat(req.body.number1);
  var number2 = parseFloat(req.body.number2);
  var result = number1 * number2;
  res.send('' + result);
});

router.post('/div', function(req, res) {
  var number1 = parseFloat(req.body.number1);
  var number2 = parseFloat(req.body.number2);
  var result = number1 / number2;
  res.send('' + result);
});

module.exports = router;
