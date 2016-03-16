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

module.exports = router;
