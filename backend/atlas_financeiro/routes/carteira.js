var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
const Carteiras = require('../models/carteiras');
const { isObjectIdOrHexString } = require('mongoose');

var app = express();

router.use(bodyParser.json());



/* GET carteiras */
router.get('/:user_id', function(req, res, next) {
  Carteiras.find({usuario_id: req.params.user_id}).then((carteira) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(carteira);
    }, (error) => next(error)).catch((error) => next(error));
});

app.get('/lastId', function(res, next) {
  console.log('entrou na rota');
  last_carteira = 0;
  user_ids = []
  id = 0;
  Carteiras.find({}).then((carteiras) => {
    carteiras.map((carteira) => {
      user_ids.push(carteira.usuario_id)
    })
    id = Math.max(...user_ids) + 1;
    res.json(id);
  }, (error) => next(error)).catch((error) => next(error))
})

// Insere ativo na carteira
router.post('/:user_id', function(req, res, next) {
  user_id = parseInt(req.params.user_id);

  let myQuery = { usuario_id: user_id };

  qtde_encontrada = 0;
  ativos_carteira = [];

  Carteiras.find(myQuery).then((carteira) => {
    qtde_encontrada = carteira.length;
    // console.log('carteira');
    // console.log(carteira[0].ativos);
    ativos_carteira = ativos_carteira.concat(carteira[0].ativos);
    
    ativos_carteira.push({ 
      "ativo_id": req.body.ativo_id,
      "empresa": req.body.empresa,
      "ticker": req.body.ticker,
      "quantidade": req.body.quantidade,
      "preco_medio": req.body.preco_medio,
      "rendimento": req.body.rendimento
    })
  }).then(() => {
    
    console.log(ativos_carteira);
    let newValues = { $set: { ativos: ativos_carteira } };
    const Options = { upsert: true };
  
    Carteiras.updateOne(myQuery, newValues, Options, function(err, res) {
      console.log(err, res);
      console.log('tudo ok.')
    });
  

  });


});

// Altera quantidade e preço médio de um ativo na carteira
router.patch('/:user_id/:ativo_id', function(req, res, next) {
  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;
  quantidade = req.body.quantidade;
  precoMedio = req.body.precoMedio;
  
  var myQuery = { usuario_id: user_id, "ativos.ativo_id": ativo_id };
  var newValues = { $set: { "ativos.$.quantidade": quantidade, "ativos.$.preco_medio": precoMedio } };
  const Options = { upsert: true };
  
  Carteiras.updateOne(myQuery, newValues).then(() => {
    console.log('Information successfully updated');
  })

  
  res.statusCode = 200;
  
}, (err) => {
  console.log(err);
})

// Deleta o ativo da carteira
router.delete('/:user_id/:ativo_id', function(req, res) {
  console.log('req.params:');
  console.log(req.params);
  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;

  var myQuery = { usuario_id: user_id }

  var valuesRemoval = { $pull: { ativos: { "ativo_id": ativo_id } } }
  
  Carteiras.updateOne(myQuery, valuesRemoval).then(() => {
    console.log('Information successfully deleted');
  })

});

/*--------------------- WATCHLIST ---------------------*/

// ADICIONAR ATIVO NA WATCHLIST
router.post('/:user_id/watchlist', function(req, res) {
  console.log(parseInt(req.body.watchlist_id))

  user_id = parseInt(req.params.user_id)
  let myQuery = { usuario_id: user_id}

  info_ativo_watchlist = []

  Carteiras.find(myQuery).then((carteira) => {
    console.log('encontrou o usuario')
    info_ativo_watchlist = info_ativo_watchlist.concat(carteira[0].watchlist)

    info_ativo_watchlist.push({
      "watchlist_id": req.body.watchlist_id,
      "ticker": req.body.ticker,
      "cotacao": req.body.cotacao,
      "dropdown": req.body.dropdown
    })
  }).then(() => {
    console.log(info_ativo_watchlist)
    let newValues = {$set:{watchlist: info_ativo_watchlist}}
    const Options = {upsert: true}

    Carteiras.updateOne(myQuery,newValues, Options).then(() => {
      console.log('Information successfully updated')
    })
  })
})

// ATUALIZAR ATIVO DA WATCHLIST
router.patch('/:user_id/watchlist/:watchlist_id', function(req, res, next) {
  
  user_id = req.params.user_id
  watchlist_id = req.params.watchlist_id
  cotacao = req.body.cotacao
  dropdown = req.body.dropdown

  var myQuery = {usuario_id: user_id, "watchlist.watchlist_id": watchlist_id }
  var newValues = {$set: {"watchlist.$.cotacao": cotacao, "watchlist.$.dropdown": dropdown}}
  const Options = { upsert: true }
  
  Carteiras.updateOne(myQuery, newValues).then(() => {
    console.log('Information successfully updated')
  })

  res.statusCode = 200

}, (err) => {
  console.log(err)
})

// DELETAR ATIVO DA WATCHLIST
router.delete('/:user_id/watchlist/:watchlist_id', function(req, res, next) {

  user_id = req.params.user_id
  watchlist_id = req.params.watchlist_id

  var myQuery = {usuario_id: user_id }
  var deleteValues = { $pull: {watchlist: { "watchlist_id": watchlist_id}}}

  Carteiras.updateOne(myQuery, deleteValues).then(() => {
    console.log('Information successfully deleted')
  })
})



module.exports = router;
