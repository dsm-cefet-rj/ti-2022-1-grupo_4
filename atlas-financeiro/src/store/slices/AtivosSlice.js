import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import { httpGet, httpPut, httpDelete, httpPost } from "../../utils";


var ativosInitialState = {
    status: 'not_loaded',
    ativos: [],
    error: null
};

function filterItems(state, arr) {
    console.log('State');
    console.log(state);
    return state.ativos.filter(function(element) {
        // debugger;
        element.informacoes_gerais.ticker.includes(arr[1]);
    });
}

function alteraBuscaReducer(state, busca) {
    debugger
    //alert('Filtro realizado com sucesso.');
    //busca.busca = busca[1];
    busca.ativos = filterItems(state, busca);
    busca.status = 'filtered';
    busca.error = null;
    return busca;
}

export const fetchAtivos = createAsyncThunk('ativos/fetchAtivos',
    async () => {
        try{
            const res = await (await fetch('http://localhost:3004/ativos')).json();
            console.log(res);
            return res;

        } catch(error) {
            return [];
        }
    });


function fulfillAtivosReducer(state, ativosFetched) {
    //console.log(`State (fulfillAtivosReducer): ${state}`)
    //console.log(state);
    state.status = 'loaded';
    state.ativos = ativosFetched.ativos;

    console.log('Completed');
    console.log(state.ativos);
    //console.log(state).ativos = ativosFetched;
    // return ativosFetched;
}

export const ativosSlice = createSlice({
    name: 'ativos',
    initialState: ativosInitialState,
    reducers: {
        alterarBusca: (state, action) => alteraBuscaReducer(state.ativos, action.payload)
    },
    extraReducers: {
        [fetchAtivos.fulfilled]: (state, action) => { fulfillAtivosReducer(state, action.payload) },
        [fetchAtivos.pending]: (state, action) => {state.status = 'loading'},
        [fetchAtivos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
    },
})


export const { alterarBusca } = ativosSlice.actions;

export default ativosSlice.reducer
