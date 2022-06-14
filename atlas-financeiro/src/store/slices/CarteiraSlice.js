import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import {httpGet, httpDelete, httpPut, httpPost} from '../../utils';

export const fetchAtivosCarteira = createAsyncThunk('carteira/fetchCarteira',
    async () => {
        return await (await fetch('http://localhost:3004/carteira')).json();
    });

const carteiraInicial = [];

function fulfillCarteiraReducer(ativosState, ativosFetched) {
    // console.log(ativosFetched.carteiras[0]);
    return ativosFetched.carteiras[0].ativos;
}

export const carteiraSlice = createSlice({
    name: 'carteira',
    initialState: carteiraInicial,
    extraReducers: {
        [fetchAtivosCarteira.fulfilled]: (state, action) => fulfillCarteiraReducer(state, action.payload)
    },
})



export default carteiraSlice.reducer