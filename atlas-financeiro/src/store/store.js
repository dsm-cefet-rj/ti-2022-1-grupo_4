import { configureStore } from '@reduxjs/toolkit'
import buscasReducer from './slices/BuscaSlice';
import ativosSlice from './slices/AtivosSlice';
import ativosReducer from './slices/AtivosSlice';
import buscaWatchlistReducer from './slices/WatchlistSlice';
import loginSlice from './slices/LoginSlice';
import carteirasSlice from './slices/CarteiraSlice';
import carteiraReducer from './slices/CarteiraSlice';
import signUpSlice from './slices/SignUpSlice';
import popupSlice from './slices/PopupSlice';
import cotacoesSlice from './slices/CotacoesSlice';
import cotacoesReducer from './slices/CotacoesSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        usuarios: signUpSlice,
        ativos: ativosReducer,
        ativos: ativosSlice,
        cotacoes: cotacoesReducer,
        popup: popupSlice,
        carteira: carteiraReducer,
        carteira: carteirasSlice,
        watchlist: buscaWatchlistReducer,
        elementos: buscaWatchlistReducer
    }
})
