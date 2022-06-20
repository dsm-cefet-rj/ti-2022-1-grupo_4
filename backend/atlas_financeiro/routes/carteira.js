var express = require('express');
var router = express.Router();
var fs = require('fs');



/* GET users listing. */
router.route('/:user_id').get((req, res, next) => {
  res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json');
  res.sendFile('carteira.json', { root: '../../shared/' });
})

router.route('/:user_id/:ativo_id')
.delete((req, res, next) => {
  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;

  let file = "../../shared/carteira.json";
  let carteiras = fs.readFileSync(file, 'utf-8');
  json_carteiras = JSON.parse(carteiras);
  // console.log(json_carteiras);
  // console.log(json_carteiras.carteiras[0].ativos);

  // console.log('Antes');
  // console.log(json_carteiras);

  json_carteiras.carteiras[0].ativos = json_carteiras.carteiras[0].ativos.filter(function (el) {
    // return (el.informacoes_gerais.ticker.toLowerCase().indexOf(state.busca.toLowerCase()) !== -1);  
    return(el.ativo_id !== ativo_id);
   })

   console.log('Após Tratamento');
   console.log(json_carteiras.carteiras[0]);

   fs.writeFileSync(file, JSON.stringify(json_carteiras), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('JSON saved');
    }
   });
  // console.log(json_carteiras);
  
  // console.log(carteira);
  // carteira = carteira.filter(function(values, index, arr){
  //   return values.usuario_id != req.params.user_id;
  // });

  console.log('----------------------------------------------------------------------');
  
  res.statusCode = 200;
  res.sendFile('carteira.json', { root: '../../shared/' });
})


module.exports = router;
