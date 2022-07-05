import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

var ativosInitialState = {
    status: 'not_loaded',
    ativos: [],
    busca: '',
    error: null
};

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
    return {...state,
        status: 'loaded',
        ativos: ativosFetched
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

export default ativosSlice.reducer;
