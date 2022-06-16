import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import {httpGet, httpDelete, httpPut, httpPost} from '../../utils';

// const carteiraInicial = [];

var carteiraInitialState = {
    status: 'not_loaded',
    id_usuario: null,
    nome_usuario: '',
    carteira: [],
    error: null
}

export const fetchAtivosCarteira = createAsyncThunk('carteira/fetchAtivosCarteira',
    async () => {
        try{
            const res = await (await fetch('http://localhost:3004/carteira')).json();
            return res;
        } catch(error) {
            return {};
        }
    });


function fulfillCarteiraReducer(state, carteiraFetched) {
    console.log(carteiraFetched.carteiras[0].ativos);
    return {...state,
        status: 'loaded',
        carteira: carteiraFetched.carteiras[0].ativos,
        id_usuario: null,
        nome_usuario: null
    }
}

export const carteirasSlice = createSlice({
    name: 'carteira',
    initialState: carteiraInitialState,
    reducers: {
        adicionarAtivoCarteira: (state, action) => {  },
        deletarAtivoCarteira: (state, action) => {  },
        updateAtivoCarteira: (state, action) => {  },
        deletarCarteira: (state, carteira) => {  }
    },
    extraReducers: {
        [fetchAtivosCarteira.fulfilled]: (state, action) => fulfillCarteiraReducer(state, action.payload)
    },
})

export const { adicionarAtivoCarteira, deletarAtivoCarteira, updateAtivoCarteira, deletarCarteira } = carteirasSlice.actions;

export default carteirasSlice.reducer;