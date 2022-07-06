const jwt = require('jsonwebtoken')
const config = require('./config')

const genAuthToken = (usuario) => {
    console.log("olha eu aqui!!")
    const secretKey = config.secretKey

    const token = jwt.sign({
        _id: usuario.usuario_id,
        nome: usuario.usuario.nome,
        email: usuario.usuario.email
    }, secretKey)
    
    return token
}

module.exports = genAuthToken