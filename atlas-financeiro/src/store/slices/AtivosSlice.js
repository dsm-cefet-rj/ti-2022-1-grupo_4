import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { httpGet } from "../../utils";
import {baseUrl} from '../../baseUrl'

export const ativosAdapter = createEntityAdapter({
    selectId: (ativos) => ativos.id
})

export const fetchAtivos = createAsyncThunk('ativos/fetchAtivos', async () => {
    return await httpGet(`${baseUrl}/ativos`) 
}) 

export const ativosSlice = createSlice({
    name: 'ativos',
    initialState: ativosAdapter.getInitialState({
        status: 'not_loaded',
        busca: '',
    }),
    reducers: {
        alterarBusca: (state, action) => { state.busca = action.payload },
        buscar: (state) => { state.ativos = state.ativos.filter(function(el) {
            return (el.informacoes_gerais.ticker.toLowerCase().indexOf(state.busca.toLowerCase()) !== -1);
        })}
    },
    extraReducers: {
        [fetchAtivos.fulfilled]: (state, action) => {state.status = 'loaded'; ativosAdapter.setAll(state, action.payload); },
        [fetchAtivos.pending]: (state, action) => {state.status = 'loading'},
        [fetchAtivos.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar usuarios: ' + action.error.message},
    },
})


export const { alterarBusca, buscar } = ativosSlice.actions;

export default ativosSlice.reducer;

export const {
    selectAll: selectAllAtivos,
    selectById: selectAtivosById,
    selectIds: selectAtivosIds
} = ativosAdapter.getSelectors(state => state.ativos)
