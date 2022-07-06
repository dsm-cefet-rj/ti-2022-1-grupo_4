const genAuthToken = require('../authenticate')
const Usuario = require('../models/carteiras')
const bodyParser = require('body-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(bodyParser.json())

router.post('/', async (req, res) => {
  let usuario = await Usuario.findOne({"usuario": {"email": req.body.email}})
  if (usuario) return res.status(400).send("Usuario já existe..")

  usuario = new Usuario({
    "usuario_id": req.body.usuario_id,
    "usuario": {
        "nome": req.body.nome,
        "status": req.body.status,
        "email": req.body.email,
        "senha": req.body.senha,
        "localidade": {
          "estado": req.body.estado,
          "pais": req.body.pais
        },
        "descricao": req.body.descricao
      },
      "ativos":[],
      "watchlist":[]
  })
  
  const salt = await bcrypt.genSalt(10)
  usuario.usuario.senha = await bcrypt.hash(usuario.usuario.senha, salt)

  usuario = await usuario.save()

  const token = genAuthToken(usuario)
  console.log(token)
  res.json(token)
})

module.exports = router