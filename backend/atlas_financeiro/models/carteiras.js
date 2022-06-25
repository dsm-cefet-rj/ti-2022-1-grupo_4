const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarteirasSchema = new Schema({
        usuario_id: Number,
        usuario: {
            nome: String,
            status: String,
            localidade: {
                estado: String,
                país: String
            },
            descricao: String
        },
        ativos: [
            {
                ativo_id: Number,
                empresa: String,
                ticker: String,
                quantidade: Number,
                preco_medio: Number,
                rendimento: Number
            }
        ]
    }
)

var Carteiras = mongoose.model('Carteiras', CarteirasSchema);
module.exports = Carteiras;