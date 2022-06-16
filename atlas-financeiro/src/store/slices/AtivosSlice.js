import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import { httpGet, httpPut, httpDelete, httpPost } from "../../utils";


var ativosInitialState = {
    status: 'not_loaded',
    ativos: [],
    busca: '',
    error: null
};

// function filterItems(state, arr) {
//     console.log('State');
//     console.log(state);
//     return state.ativos.filter(function(element) {
//         // debugger;
//         element.informacoes_gerais.ticker.includes(arr[1]);
//     });
// }

const alteraBuscaReducer = (state, action) => {
    // var new_array = ...state
    state.busca = action.payload;
    console.log(state.busca);
    console.log(action);
    debugger
    // return action;
}

function buscaReducer(state, listaAtivos) {
    debugger;
}

export const fetchAtivos = createAsyncThunk('ativos/fetchAtivos',
    async () => {
        try{
            const res = await (await fetch('http://localhost:3004/ativos')).json();
            return res;

        } catch(error) {
            return [];
        }
    });


function fulfillAtivosReducer(state, ativosFetched) {
    // state.status = 'loaded';
    // state.ativos = ativosFetched.ativos;
    return {...state,
        status: 'loaded',
        ativos: ativosFetched.ativos
    }
}

export const ativosSlice = createSlice({
    name: 'ativos',
    initialState: ativosInitialState,
    reducers: {
        alterarBusca: (state, action) => { state.busca = action.payload },
        buscar: (state, action) => { state.ativos = state.ativos.filter(function(el) {
            return (el.informacoes_gerais.ticker.toLowerCase().indexOf(state.busca.toLowerCase()) !== -1);
        }) }
    },
    extraReducers: {
        [fetchAtivos.fulfilled]: (state, action) => (fulfillAtivosReducer(state, action.payload)),
        [fetchAtivos.pending]: (state, action) => {state.status = 'loading'},
        [fetchAtivos.rejected]: (state, action) => {state.status = 'failed'; state.error = action.error.message}
    },
})


export const { alterarBusca, buscar } = ativosSlice.actions;

export default ativosSlice.reducer
