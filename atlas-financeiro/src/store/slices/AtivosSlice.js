import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";

export const fetchAtivos = createAsyncThunk('ativos/fetchAtivos',
    async () => {
        return await (await fetch('http://localhost:3004/ativos')).json();
    });

const ativosInicial = [];

function fulfillAtivosReducer(ativosState, ativosFetched) {
    return ativosFetched.ativos;
}

export const ativosSlice = createSlice({
    name: 'ativos',
    initialState: ativosInicial,
    extraReducers: {
        [fetchAtivos.fulfilled]: (state, action) => fulfillAtivosReducer(state, action.payload)
    },
})



export default ativosSlice.reducer