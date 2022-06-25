import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import {httpGet, httpDelete, httpPut, httpPost} from '../../utils';


var cotacoesInitialState = {
    status: 'not_loaded',
    ativo_id: null,
    cotacoes: [],
    error: null
}

export const fetchCotacoes = createAsyncThunk('cotacoes/fetchCotacoes',
    async () => {
        try{
            const res = await (await fetch('http://localhost:3004/ativos')).json();
            return res;
        } catch(error) {
            return {};
        }
    });


function fulfillCotacoesReducer(state, cotacoesFetched) {
    const filteredCotacoesFetched = cotacoesFetched.filter(function(el) {
        return (parseInt(el.id) === state.ativo_id);
    })
    
    return {...state,
        status: 'loaded',
        cotacoes: filteredCotacoesFetched
    }
}

export const cotacoesSlice = createSlice({
    name: 'cotacoes',
    initialState: cotacoesInitialState,
    reducers: {
        alterarId: (state, action) => { state.ativo_id = parseInt(action.payload) }
    },
    extraReducers: {
        [fetchCotacoes.fulfilled]: (state, action) => (fulfillCotacoesReducer(state, action.payload)),
        [fetchCotacoes.pending]: (state, action) => {state.status = 'loading'},
        [fetchCotacoes.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
    },
})


export const { alterarId } = cotacoesSlice.actions;

export default cotacoesSlice.reducer;
    