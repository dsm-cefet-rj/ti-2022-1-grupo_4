var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const Ativos = require('../models/ativoModel');

router.use(bodyParser.json());

// GET ativos from Mongo DB
router.get('/', function(req, res, next) {
  Ativos.find({}).then((ativos) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(ativos);
    }, (error) => next(error)).catch((error) => next(error));
});

router.post('/', function(req, res, next) {
  Ativos.create(req.body).then((ativo) => {
    console.log('Ativo criado: ', ativo);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(ativo);
  }, (error) => next(error))
  .catch((error) => next(error));
})

//   res.sendFile('ativos.json', { root: '../../shared/' });

module.exports = router;
