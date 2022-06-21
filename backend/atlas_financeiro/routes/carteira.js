var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET users listing. */
router.route('/:user_id')
.get((req, res, next) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  res.sendFile('carteira.json', { root: '../../shared/' });
})
.post((req, res) =>{
  user_id = req.params.user_id;
  ativo_id = req.body.ativo_id;

  let file = "../../shared/carteira.json";
  let carteiras = fs.readFileSync(file, 'utf-8');
  var json_carteiras = JSON.parse(carteiras);

  var indice = null;
  json_carteiras.carteiras.filter(function(carteira) {
    if(carteira.usuario_id === parseInt(user_id)) {
      indice = json_carteiras.carteiras.indexOf(carteira);
      return json_carteiras.carteiras.indexOf(carteira);
    }
    return(null);
  })

  // Checando se o ativo já está em carteira
  var emCarteira = false;
  json_carteiras.carteiras[indice].ativos.forEach(function (el) {
    ativo_id_req = parseInt(ativo_id)
    if (el.ativo_id === ativo_id_req) {
      emCarteira = true;
    }
  })

  if(!emCarteira) {
    json_carteiras.carteiras[indice].ativos.push(req.body);
  
    fs.writeFileSync(file, JSON.stringify(json_carteiras), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log('JSON saved');
      }
     });
  }

})


router.route('/:user_id/:ativo_id')
.delete((req, res, next) => {
  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;

  let file = "../../shared/carteira.json";
  let carteiras = fs.readFileSync(file, 'utf-8');
  var json_carteiras = JSON.parse(carteiras);

  var indice = null;
  json_carteiras.carteiras.filter(function(carteira) {
    if(carteira.usuario_id === parseInt(user_id)) {
      indice = json_carteiras.carteiras.indexOf(carteira);
      return json_carteiras.carteiras.indexOf(carteira);
    }
    return(null);
  })

  json_carteiras.carteiras[indice].ativos = json_carteiras.carteiras[indice].ativos.filter(function (el) {
    ativo_id_req = parseInt(ativo_id)
    return(el.ativo_id !== ativo_id_req);
   })

   fs.writeFileSync(file, JSON.stringify(json_carteiras), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('JSON saved');
    }
   });

   res.statusCode = 200;
  res.sendFile('carteira.json', { root: '../../shared/' });
})
.patch((req, res, next) =>{

  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;
  quantidade = req.body.quantidade;
  precoMedio = req.body.precoMedio;
  
  let file = "../../shared/carteira.json";
  let carteiras = fs.readFileSync(file, 'utf-8');
  var json_carteiras = JSON.parse(carteiras);

  var indice = null;
  json_carteiras.carteiras.filter(function(carteira) {
    if(carteira.usuario_id === parseInt(user_id)) {
      indice = json_carteiras.carteiras.indexOf(carteira);
      return json_carteiras.carteiras.indexOf(carteira);
    }
    return(null);
  })

  // console.log('indice');
  // console.log(indice);

  console.log(json_carteiras.carteiras[indice].ativos);
  
  elements = [];
  json_carteiras.carteiras[indice].ativos.map(function (el) {
    if(el.ativo_id === parseInt(ativo_id)) {
      el.quantidade = quantidade;
      el.preco_medio = precoMedio;
    }
    elements.push(el);
   })

   
   json_carteiras.carteiras[indice].ativos = elements;
   
   fs.writeFileSync(file, JSON.stringify(json_carteiras), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('JSON saved');
    }
   });

   res.statusCode = 200;
  res.sendFile('carteira.json', { root: '../../shared/' });

})




module.exports = router;
