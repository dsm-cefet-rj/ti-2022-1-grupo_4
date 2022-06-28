var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
const Carteiras = require('../models/carteiras');
const { isObjectIdOrHexString } = require('mongoose');

router.use(bodyParser.json());



/* GET carteiras */
router.get('/:user_id', function(req, res, next) {
  Carteiras.find({usuario_id: req.params.user_id}).then((carteira) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(carteira);
    }, (error) => next(error)).catch((error) => next(error));
});

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

// Insere ativo na watchlist do usuário
router.post('/:user_id', function(res, req) {
  Carteiras.findOneAndUpdate({usuario_id: req.params.user_id}, {
    $push: {
      "watchlist": [{
        "watchlist_id": req.body.proxId,
        "ticker": req.body.ticker,
        "cotacao": req.body.cotacao,
        "dropdown": req.body.dropdown
      }]
    }
  },
  {
    arrayFilters: [
      {
        "watchlist": {
          $exists: true
        }
      }
    ]
  }).then(() => {
    console.log('Information successfully updated')
  })
  res.statusCode = 200
}, (err) => {
  console.log(err)
})

// Atualizar ativo da watchlist
router.patch('/:user', function(res, req) {

})

// Deletar ativo da watchlist
router.delete('/:user', function(res, req) {

})





router.route('/:user_id/:ativo_id')
// .delete((req, res, next) => {
//   user_id = req.params.user_id;
//   ativo_id = req.params.ativo_id;

//   let file = "../../shared/carteira.json";
//   let carteiras = fs.readFileSync(file, 'utf-8');
//   var json_carteiras = JSON.parse(carteiras);

//   var indice = null;
//   json_carteiras.carteiras.filter(function(carteira) {
//     if(carteira.usuario_id === parseInt(user_id)) {
//       indice = json_carteiras.carteiras.indexOf(carteira);
//       return json_carteiras.carteiras.indexOf(carteira);
//     }
//     return(null);
//   })

//   json_carteiras.carteiras[indice].ativos = json_carteiras.carteiras[indice].ativos.filter(function (el) {
//     ativo_id_req = parseInt(ativo_id)
//     return(el.ativo_id !== ativo_id_req);
//    })

//    fs.writeFileSync(file, JSON.stringify(json_carteiras), function(err) {
//     if(err) {
//       console.log(err);
//     } else {
//       console.log('JSON saved');
//     }
//    });

//    res.statusCode = 200;
//   res.sendFile('carteira.json', { root: '../../shared/' });
// })



module.exports = router;
