import { configureStore } from '@reduxjs/toolkit'
import mudaBusca from './componentes/reducers/BuscaSlice'

export const store = configureStore({
    reducer: {
        busca: mudaBusca
    }
})
