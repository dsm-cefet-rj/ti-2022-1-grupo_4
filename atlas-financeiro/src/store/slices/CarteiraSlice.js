import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import {httpGet, httpDelete, httpPut, httpPost} from '../../utils';


var carteiraInitialState = {
    status: 'not_loaded',
    id_usuario: null,
    carteira: {},
    error: null
}

export const fetchAtivosCarteira = createAsyncThunk('carteira/fetchAtivosCarteira',
    async () => {
        try{
            const res = await (await fetch('http://localhost:3004/carteiras')).json();
            return res;
        } catch(error) {
            return {};
        }
    });


function fulfillCarteiraReducer(state, carteiraFetched) {
    const filteredCarteirasFetched = carteiraFetched.carteiras.filter(function(el) {
        return (parseInt(el.usuario_id) === parseInt(state.id_usuario));
    })

    // debugger;
    var result = [];
    if(filteredCarteirasFetched.length === 0) {
        result = [];
    } else {
        result = filteredCarteirasFetched;
    }

    return {...state,
        status: 'loaded',
        id_usuario: state.id_usuario,
        carteira: result,
        error: null
    }
}

export const carteirasSlice = createSlice({
    name: 'carteira',
    initialState: carteiraInitialState,
    reducers: {
        alterarId: (state, action) => { state.id_usuario = parseInt(action.payload) },
        adicionarAtivoCarteira: (state, action) => {  },
        deletarAtivoCarteira: (state, action) => {  },
        updateAtivoCarteira: (state, action) => { console.log(action.payload) },
        deletarCarteira: (state, carteira) => {  }
    },
    extraReducers: {
        [fetchAtivosCarteira.fulfilled]: (state, action) => fulfillCarteiraReducer(state, action.payload)
    },
})

export const { alterarId, adicionarAtivoCarteira, deletarAtivoCarteira, updateAtivoCarteira, deletarCarteira } = carteirasSlice.actions;

export default carteirasSlice.reducer;