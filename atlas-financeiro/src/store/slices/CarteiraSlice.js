import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit";

/**
 * @module store/slice/CarteiraSlice
 */

const carteiraAdapter = createEntityAdapter({
    selectId: (ativo) => ativo.ativo_id
})

export const fetchAtivosCarteira = createAsyncThunk('carteira/fetchAtivosCarteira',
async ({ user_id }) => {
    try{
        const res = await (await fetch(`http://localhost:3004/carteira/${user_id}`)).json()
        return res
    } catch(error) {
        return {}
    }
})

export const deleteAtivoCarteira = createAsyncThunk('carteira/deleteAtivoCarteira', 
async ({ user_id, ativo_id }) => {
    user_id = parseInt(user_id)
    ativo_id = parseInt(ativo_id)
    await fetch(`http://localhost:3004/carteira/${user_id}/${ativo_id}`, {
        method: 'DELETE',
    })
    return { user_id, ativo_id }
})

export const updateAtivoCarteira = createAsyncThunk('carteira/updateAtivoCarteira',
async({ user_id, ativo_id, dadosAtualizados }) => {    
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/${ativo_id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosAtualizados),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})

export const createAtivoCarteira = createAsyncThunk('carteira/createAtivoCarteira',
async({ user_id, dadosInput }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}`, {
        method: 'POST',
        body: JSON.stringify(dadosInput),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})



export const createWatchlist = createAsyncThunk('carteira/createWatchlist',
async({ user_id, dadosInput }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/watchlist`, {
        method: 'POST',
        body: JSON.stringify(dadosInput),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})

export const updateWatchlist = createAsyncThunk('carteira/updateWatchlist',
async({ user_id, watchlist_id, dadosAtualizadosAtivo }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/watchlist/${watchlist_id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosAtualizadosAtivo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})

export const deleteWatchlist = createAsyncThunk('carteira/deleteWatchlist', 
async ({ user_id, watchlist_id }) => {
    user_id = parseInt(user_id)
    watchlist_id = parseInt(watchlist_id)
    await fetch(`http://localhost:3004/carteira/${user_id}/watchlist/${watchlist_id}`, {
        method: 'DELETE',
    })
    return { user_id, watchlist_id }
})

export const carteirasSlice = createSlice({
    name: 'carteira',
    initialState: carteiraAdapter.getInitialState({ id_usuario: null, usuario: {}, carteira: {}, watchlist: [], status: 'not_loaded', error: null }),
    reducers: {
        alterarId: (state, action) => { state.id_usuario = parseInt(action.payload) },
    },
    extraReducers: {
        [fetchAtivosCarteira.fulfilled]: (state, action) => {
            state.status = 'loaded';
            carteiraAdapter.setAll(state, action.payload[0].ativos);
            state.carteira = action.payload[0].ativos;
            state.usuario = action.payload[0].usuario;
            state.watchlist = action.payload[0].watchlist;
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
        [deleteWatchlist.fulfilled]: (state, { payload: {user_id, watchlist_id} }) => {
            state.status = 'removed'
            carteiraAdapter.removeOne(state, watchlist_id);
        },
        [updateAtivoCarteira]: (state, action) => {
            state.status = 'updated'
        },
        [updateWatchlist]: (state, action) => {
            state.status = 'updated'
        },
        [createAtivoCarteira.fulfilled]: (state, action) => {
            state.status = 'created'
        },
        [createWatchlist]: (state, action) => {
            state.status = 'created'
        }
    },
})

export const { alterarId } = carteirasSlice.actions

export default carteirasSlice.reducer