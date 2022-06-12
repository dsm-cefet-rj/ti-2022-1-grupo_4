import { configureStore } from '@reduxjs/toolkit'
import mudaBusca from './slices/BuscaSlice'
import { alteraTicker, alteraCotacao, alteraDropdown, adicionaWatchlist } from './slices/WatchlistSlice'
import loginSlice from './slices/LoginSlice';

export const store = configureStore({
    reducer: {
        busca: mudaBusca,
        login: loginSlice,
        ticker: alteraTicker,
        cotacao: alteraCotacao,
        dropdown: alteraDropdown,
        watchlist: adicionaWatchlist
    }
})
