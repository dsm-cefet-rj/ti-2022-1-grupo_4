const genAuthToken = require('../authenticate')
const Usuario = require('../models/carteiras')
const bodyParser = require('body-parser')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(bodyParser.json())

router.post('/', async (req, res) => {
  console.log(req.body)
    let usuario = await Usuario.findOne({$or: [{"usuario.email": req.body.email}]})
    if (!usuario) return res.status(400).send("Email ou login invalido..")
    console.log(usuario.usuario.email)
    const isValid = await bcrypt.compare(req.body.senha, usuario.usuario.senha)
    console.log('to aqui pelo menos')
    if (!isValid) return res.status(400).send("Email ou login invalido..")
    console.log('consegui passar!')
    const token = genAuthToken(usuario)
  console.log('e aqui!!!')
  console.log(token)
    res.json(token)
  })
  
  module.exports = router