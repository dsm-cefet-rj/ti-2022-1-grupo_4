var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  res.sendFile('carteira.json', { root: '../../shared/' });
});

module.exports = router;
