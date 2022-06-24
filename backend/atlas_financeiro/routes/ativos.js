var express = require('express');
var router = express.Router();
const Ativos = require('../models/ativos');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');  
  res.sendFile('ativos.json', { root: '../../shared/' });
});

module.exports = router;
