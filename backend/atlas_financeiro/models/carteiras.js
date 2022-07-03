const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarteirasSchema = new Schema({
        usuario_id: Number,
        usuario: {
            nome: String,
            status: String,
            email: String,
            senha: String,
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
        ],
        watchlist: [
            {
                watchlist_id: Number,
                ticker: String,
                cotacao: Number,
                dropdown: Number
            }
        ]
    }
)

var Carteiras = mongoose.model('Carteiras', CarteirasSchema);
module.exports = Carteiras;
