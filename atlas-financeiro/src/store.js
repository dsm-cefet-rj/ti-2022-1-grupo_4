import { configureStore } from '@reduxjs/toolkit'
import mudaBusca from './reducers/BuscaSlice'
import { alteraTicker, alteraCotacao, alteraDropdown, adicionaWatchlist } from './reducers/WatchlistSlice'
import { recebeEmail, recebeSenha } from './reducers/LoginSlice';

export const store = configureStore({
    reducer: {
        busca: mudaBusca,
        email: recebeEmail,
        senha: recebeSenha,
        ticker: alteraTicker,
        cotacao: alteraCotacao,
        dropdown: alteraDropdown,
        watchlist: adicionaWatchlist
    }
})
