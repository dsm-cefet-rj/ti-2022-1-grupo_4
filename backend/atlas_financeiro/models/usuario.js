const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const normalize = require('normalize-mongoose');

const usuarioSchema = new Schema ({
    nome:{
        type: String,
        required: true,

    },

    status:{
        type: String,
        required: true,

    },

    estado:{
        type: String,
        required: true,

    },

    pais:{
        type: String,
        required: true,

    },

    descricao:{
        type: String,
        required: true,

    },

    email:{
        type: String,
        required: true,

    },

    senha:{
        type: String,
        required: true,

    }

})

usuarioSchema.plugin(normalize);

var Usuarios = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuarios;
