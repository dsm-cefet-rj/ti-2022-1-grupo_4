import { createAsyncThunk, createSlice, createEntityAdapter } from "@reduxjs/toolkit"

/**
 * @module store/slice/WatchlistSlice
 */

const watchlistAdapter = createEntityAdapter({
    selectId: (carteira) => carteira.usuario_id
})

export const fetchWatchlist = createAsyncThunk('carteira/fetchWatchlist', async ({ user_id }) => {
    try{
        const res = await (await fetch(`http://localhost:3004/carteira/${user_id}`)).json()
        return res
    } catch(error) {
        return {}
    }
}) 

export const deleteWatchlist = createAsyncThunk('carteira/deleteWatchlist', async ({ user_id, watchlist_id }) => {
    user_id = parseInt(user_id)
    watchlist_id = parseInt(watchlist_id)
    await fetch(`http://localhost:3004/carteira/${user_id}/${watchlist_id}`, {
        method: 'DELETE',
    })
    return { user_id, watchlist_id }
})

export const updateWatchlist = createAsyncThunk('carteira/updateWatchlist', async({ user_id, watchlist_id, dadosAtualizados }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/${watchlist_id}`, {
        method: 'PATCH',
        body: JSON.stringify(dadosAtualizados),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})

export const createWatchlist = createAsyncThunk('carteira/createWatchlist', async({ user_id, dadosInput }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}`, {
        method: 'POST',
        body: JSON.stringify(dadosInput),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data
})

function alterarElementoReducer(estado, elementos) {
    if (elementos["dropdown"] === 0) {
        elementos["dropdown"] = 'Acima da Cotação'
    } else if (elementos["dropdown"] === 1) {
        elementos["dropdown"] = 'Abaixo da Cotação'
    }

    return elementos
}

function adicionarWatchlistReducer(watchlist, elemento) {
    return elemento
}

export const buscaWatchlistSlice = createSlice({
    name: 'watchlist',
    initialState: watchlistAdapter.getInitialState(),
    reducers: {
        alterarWatchlistId: (state, action) => { state.id_usuario = parseInt(action.payload) },
        alterarElemento: (state, action) => alterarElementoReducer(state, action.payload),
        adicionarWatchlist: (state, action) => adicionarWatchlistReducer(state, action.payload)
    }, extraReducers: {
        [fetchWatchlist.fulfilled]: (state, action) => {
            state.status = 'loaded';
            watchlistAdapter.setAll(state, action.payload.carteiras);
            state.carteira = state.entities[state.id_usuario];
        },
        [fetchWatchlist.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchWatchlist.rejected]: (state, action) => {
            state.status = 'rejected'
        },
        [deleteWatchlist.fulfilled]: (state, { payload: {user_id, ativo_id} }) => {
            state.status = 'removed'
            watchlistAdapter.removeOne(state, ativo_id);
        },
        [updateWatchlist]: (state, action) => {
            state.status = 'updated'
        },
        [createWatchlist]: (state, action) => {
            state.status = 'created'
        }
    },
})

export const { alterarWatchlistId, alterarElemento, adicionarWatchlist } = buscaWatchlistSlice.actions

export default buscaWatchlistSlice.reducer