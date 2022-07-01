const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const usuarioSchema = new Schema ({
    id: {
        type: Number,
        required: true
    },

    nome:{
        type: String,
        required: true,

    },

    email:{
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
    
    status:{
        type: String,
    
    },

    sobre:{
        type: String,

    },

    

    senha:{
        type: String,
        required: true,

    }

})

usuarioSchema.plugin(passportLocalMongoose)
var Usuarios = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuarios
