import { createSlice } from "@reduxjs/toolkit"


const initialSearch = "";

function alteraBuscaReducer(buscaAtivo, ativo) {
    return ativo;
}

export const buscasSlice = createSlice({
    name: 'busca',
    initialState: initialSearch,
    reducers: {
        alterarBusca: (state, action) => alteraBuscaReducer(state, action.payload)
    }
})

export const { alterarBusca, buscar } = buscasSlice.actions;

export default buscasSlice.reducer;
