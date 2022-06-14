import { createSlice } from "@reduxjs/toolkit";
import { httpGet, httpDelete, httpPost } from "../../utils";

export const loginSlice = createSlice ({
    name: 'login',
    initialState: {
        email: '',
        senha: '',
    },
    reducers: {
        getUserEmail: (state, action) => {
            state.email = action.payload
        },
        getUserSenha: (state, action) => {
            state.senha = action.payload
        },
    },
})

export const { getUserEmail, getUserSenha } = loginSlice.actions
export default loginSlice.reducer