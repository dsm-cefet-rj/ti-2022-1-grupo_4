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
  var json_carteiras = JSON.parse(carteiras);

  json_carteiras.carteiras[user_id - 1].ativos = json_carteiras.carteiras[user_id - 1].ativos.filter(function (el) {
    ativo_id_req = parseInt(ativo_id)
    return(el.ativo_id !== ativo_id_req);
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

   res.statusCode = 200;
  res.sendFile('carteira.json', { root: '../../shared/' });
})
.patch((req, res, next) =>{

  user_id = req.params.user_id;
  ativo_id = req.params.ativo_id;
  
  console.log('req.params');
  console.log(req.params);
  console.log(req.method);
  console.log(req.hostname);
  // console.log(req.)
  console.log('Body:');
  console.log(req.body);

  
  let file = "../../shared/carteira.json";
  let carteiras = fs.readFileSync(file, 'utf-8');
  var json_carteiras = JSON.parse(carteiras);

})


module.exports = router;
