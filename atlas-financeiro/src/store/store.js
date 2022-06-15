import { configureStore } from '@reduxjs/toolkit'
import gerenciaAtivos, { fetchAtivos } from './slices/AtivosSlice';
import buscasReducer from './slices/BuscaSlice';
import ativosSlice from './slices/AtivosSlice';
import ativosReducer from './slices/AtivosSlice';
import buscaWatchlistReducer from './slices/WatchlistSlice';
import loginSlice from './slices/LoginSlice';
import carteiraReducer from './slices/CarteiraSlice';
import signUpSlice from './slices/SignUpSlice';


export const store = configureStore({
    reducer: {
        login: loginSlice,
        cadastro: signUpSlice,
        ativos: ativosReducer,
        ativos: ativosSlice,
        carteira: carteiraReducer,
        watchlist: buscaWatchlistReducer,
        elementos: buscaWatchlistReducer
    }
})
