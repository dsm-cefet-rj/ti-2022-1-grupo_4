const jwt = require('jsonwebtoken')
const config = require('./config')

const genAuthToken = (usuario) => {
    const secretKey = config.secretKey

    const token = jwt.sign({
        _id: usuario.usuario_id,
        nome: usuario.nome,
        email: usuario.emal
    }, secretKey)

    return token
}

module.exports = genAuthToken