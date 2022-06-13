import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const tickerInicial = ''
const cotacaoInicial = ''
const dropdownInicial = ''

const preenchimentoInicial = { "ticker": tickerInicial, "cotacao": cotacaoInicial, "dropdown":dropdownInicial}

function alterarElementoReducer(estado, elementos) {
    if (elementos["dropdown"] == 0) {
        elementos["dropdown"] = 'Acima da Cotação'
    } else if (elementos["dropdown"] == 1) {
        elementos["dropdown"] = 'Abaixo da Cotação'
    }

    return elementos;
}

function adicionarWatchlistReducer(watchlist, elemento) {
    return elemento;
}

export const buscaWatchlistSlice = createSlice({
    name: 'watchlist',
    initialState: preenchimentoInicial,
    reducers: {
        alterarElemento: (state, action) => alterarElementoReducer(state, action.payload),
        adicionarWatchlist: (state, action) => adicionarWatchlistReducer(state, action.payload)
    }
})

export const { alterarElemento, adicionarWatchlist } = buscaWatchlistSlice.actions;

export default buscaWatchlistSlice.reducer;