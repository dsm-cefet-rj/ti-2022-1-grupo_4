import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { useParams, useHistory } from "react-router-dom";
import {httpGet, httpDelete, httpPut, httpPost} from '../../utils';
import { baseUrl } from "../../baseUrl";


// creating entityAdapter
const carteiraAdapter = createEntityAdapter({
    selectId: (carteira) => carteira.usuario_id
})

export const fetchAtivosCarteira = createAsyncThunk('carteira/fetchAtivosCarteira',
    async ({ user_id }) => {
        try{
            const res = await (await fetch(`http://localhost:3004/carteira/${user_id}`)).json();
            return res;
        } catch(error) {
            return {};
        }
    });


export const deleteAtivoCarteira = createAsyncThunk('carteira/deleteAtivoCarteira', 
    async ({ user_id, ativo_id }) => {
        user_id = parseInt(user_id);
        ativo_id = parseInt(ativo_id);
        await fetch(`http://localhost:3004/carteira/${user_id}/${ativo_id}`, {
            method: 'DELETE',
        })
        return { user_id, ativo_id }
    });

export const updateAtivoCarteira = createAsyncThunk('carteira/updateAtivoCarteira',
    async({ user_id, ativo_id, dadosAtualizados }) => {
        debugger;
        const data = await fetch(`http://localhost:3004/carteira/${user_id}/${ativo_id}`, {
            method: 'PATCH',
            body: JSON.stringify(dadosAtualizados),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())
        debugger;
        return data;
    });

export const carteirasSlice = createSlice({
    name: 'carteira',
    initialState: carteiraAdapter.getInitialState({ id_usuario: null, carteira: {}, status: 'not_loaded', error: null }),
    reducers: {
        alterarId: (state, action) => { state.id_usuario = parseInt(action.payload) },
    },
    extraReducers: {
        [fetchAtivosCarteira.fulfilled]: (state, action) => {
            state.status = 'loaded';
            carteiraAdapter.setAll(state, action.payload.carteiras);
            state.carteira = state.entities[state.id_usuario];
        },
        [fetchAtivosCarteira.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchAtivosCarteira.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [deleteAtivoCarteira.fulfilled]: (state, { payload: {user_id, ativo_id} }) => {
            state.status = 'removed'
            carteiraAdapter.removeOne(state, ativo_id);
        },
        [updateAtivoCarteira]: (state, action) => {
            state.status = 'updated'
        }
    },
})

export const { alterarId } = carteirasSlice.actions;

export default carteirasSlice.reducer;

export const {
    selectAll: selectAllAtivosCarteira,
    selectById: selectAtivosCarteriaById,
    selectIds: selectAtivosCarteiraIds
} = ativosCarteiraAdapter.getSelectors(state => state.ativosCarteira)