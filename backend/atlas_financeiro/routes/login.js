const genAuthToken = require('../authenticate')
const Usuario = require('../models/carteiras')
const bodyParser = require('body-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(bodyParser.json())

router.post('/', async (req, res) => {
  let usuario = await Usuario.findOne({$or: [{"usuario.email": req.body.email}]})
  if (!usuario) return res.status(400).send("Email ou login invalido..")

  const isValid = await bcrypt.compare(req.body.senha, usuario.usuario.senha)
  if (!isValid) return res.status(400).send("Email ou login invalido..")
  
  const token = genAuthToken(usuario)
  res.json(token)
})
  
module.exports = router