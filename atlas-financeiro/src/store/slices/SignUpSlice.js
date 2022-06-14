import { createSlice } from "@reduxjs/toolkit";
import { httpGet, httpDelete, httpPost } from "../../utils";

export const SignUpSlice = createSlice ({
    name: 'cadastro',
    initialState: {
        nome: '',
        localidade: {
            estado: '',
            pais: '',
        },
        status: '',
        sobre: '',
        email: '',
        senha: '',
    },
    reducers: {
        getUserNome: (state, action) => {
            state.nome = action.payload
        },
        getUserEstado: (state, action) => {
            state.localidade.estado = action.payload
        },
        getUserPais: (state, action) => {
            state.localidade.pais = action.payload
        },
        getUserStatus: (state, action) => {
            state.status = action.payload
        },
        getUserSobre: (state, action) => {
            state.sobre = action.payload
        },
        getUserEmail: (state, action) => {
            state.email = action.payload
        },
        getUserSenha: (state, action) => {
            state.senha = action.payload
        },
    },
})

export const { 
    getUserNome, 
    getUserEstado, 
    getUserPais, 
    getUserStatus,
    getUserSobre,
    getUserEmail, 
    getUserSenha 
} = SignUpSlice.actions
export default SignUpSlice.reducer