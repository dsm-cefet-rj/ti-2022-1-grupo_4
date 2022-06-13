import { configureStore } from '@reduxjs/toolkit'
import gerenciaAtivos, { fetchAtivos } from './reducers/AtivosSlice'
import buscasReducer from './reducers/BuscaSlice';
import ativosReducer from './reducers/AtivosSlice';
import buscaWatchlistReducer from './reducers/WatchlistSlice';
import loginSlice from './slices/LoginSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        ativos: ativosReducer,
        busca: buscasReducer,
        watchlist: buscaWatchlistReducer,
        elementos: buscaWatchlistReducer
    }
})
