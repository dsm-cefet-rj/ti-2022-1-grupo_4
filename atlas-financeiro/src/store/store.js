import { configureStore } from '@reduxjs/toolkit'
import buscasSlice  from './slices/BuscaSlice';
import ativosSlice from './slices/AtivosSlice';
import ativosReducer from './slices/AtivosSlice';
import buscaWatchlistReducer from './slices/WatchlistSlice';
import carteirasSlice from './slices/CarteiraSlice';
import carteiraReducer from './slices/CarteiraSlice';
import AuthenticationSlice from './slices/AuthenticationSlice';
import popupSlice from './slices/PopupSlice';
import cotacoesSlice from './slices/CotacoesSlice';
import cotacoesReducer from './slices/CotacoesSlice';

export const store = configureStore({
    reducer: {
        busca: buscasSlice,
        auth: AuthenticationSlice,
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
