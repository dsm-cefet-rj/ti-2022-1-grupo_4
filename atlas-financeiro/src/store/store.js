import { configureStore } from '@reduxjs/toolkit'
import gerenciaAtivos, { fetchAtivos } from './slices/AtivosSlice';
import buscasReducer from './slices/BuscaSlice';
import ativosReducer from './slices/AtivosSlice';
import buscaWatchlistReducer from './slices/WatchlistSlice';
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
