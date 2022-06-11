import { configureStore } from '@reduxjs/toolkit'
import mudaBusca from './reducers/BuscaSlice'
import { alteraTicker, alteraCotacao, alteraDropdown, adicionaWatchlist } from './reducers/WatchlistSlice'

export const store = configureStore({
    reducer: {
        busca: mudaBusca,
        ticker: alteraTicker,
        cotacao: alteraCotacao,
        dropdown: alteraDropdown,
        watchlist: adicionaWatchlist
    }
})
