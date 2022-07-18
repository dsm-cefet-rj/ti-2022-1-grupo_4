import { createSlice } from "@reduxjs/toolkit"

/**
 * @module store/slice/PopupSlice
 */

export const popupSlice = createSlice ({
    name: 'popup',
    initialState: {
        ativado: false,
    },
    reducers: {
        getEvent: (state) => {
            state.ativado = true
        },
    },
})

export const { getEvent } = popupSlice.actions

export default popupSlice.reducer