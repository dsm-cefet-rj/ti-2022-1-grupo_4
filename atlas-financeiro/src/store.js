import { configureStore } from '@reduxjs/toolkit'
import mudaBusca from './componentes/reducers/BuscaSlice'
import { alteraTicker, alteraCotacao, alteraDropdown, adicionaWatchlist } from './componentes/reducers/WatchlistSlice'

export const store = configureStore({
    reducer: {
        busca: mudaBusca,
        ticker: alteraTicker,
        cotacao: alteraCotacao,
        dropdown: alteraDropdown,
        watchlist: adicionaWatchlist
    }
})
