import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import jwtDecode from 'jwt-decode'

/**
 * @module store/slice/AuthenticationSlice
 */

const AuthenticationAdapter = createEntityAdapter({
    selectId: (usuarios) => usuarios.usuario_id
})

export const signUpNewUsuario = createAsyncThunk('auth/signUpNewUsuario',
async({ dadosInput, rejectWithValue }) => {
    try {
        const usuario_id = await fetch('http://localhost:3004/carteira/get/lastId', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())

        dadosInput.usuario_id = usuario_id

        const token = await fetch(`http://localhost:3004/usuarios/sign-up`, {
            method: 'POST',
            body: JSON.stringify(dadosInput),
            nome: dadosInput.nome,
            email: dadosInput.email,
            senha: dadosInput.senha,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())

        localStorage.setItem("token", token)
        return token
    } catch (error) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data)
    }
})


export const loginUsuario = createAsyncThunk('auth/loginUsuario',
async({ dadosInput, rejectWithValue }) => {
    try {
        const token = await fetch(`http://localhost:3004/usuarios/login`, {
            method: 'POST',
            body: JSON.stringify(dadosInput),
            email: dadosInput.email,
            senha: dadosInput.senha,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => res.json())

        localStorage.setItem("token", token)
       
        return token
    } catch (error) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data)
    }
})


export const AuthenticationSlice = createSlice ({
    name: 'auth',
    initialState: AuthenticationAdapter.getInitialState({
        token: localStorage.getItem("token"),
        _id: "",
        nome: "",
        email: "",
        signUpStatus: "",
        signUpError: "",
        loginStatus: "",
        loginError: "",
        usuarioLoaded: false
    }),
    reducers: {
        loadUser(state, action) {
            const token = state.token

            if (token) {
                const usuario = jwtDecode(token)
                return {
                    ...state,
                    token,
                    nome: usuario.nome,
                    email: usuario.email,
                    _id: usuario._id,
                    usuarioLoaded: true
                } 
            } else return { ...state, userLoaded: true }
        },
        logoutUser(state, action) {
            localStorage.removeItem("token")
            return {
                ...state,
                token: "",
                _id: "",
                nome: "",
                email: "",
                signUpStatus: "",
                signUpError: "",
                loginStatus: "",
                loginError: "",
                usuarioLoaded: false
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signUpNewUsuario.pending, (state, action) => {
            return {...state, signUpStatus: "pending"}
        })
        builder.addCase(signUpNewUsuario.fulfilled, (state, action) => {
            if (action.payload) {
                const usuario = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    nome: usuario.nome,
                    email: usuario.email,
                    _id: usuario._id,
                    signUpStatus: "success"
                }
            } else return state
        })
        builder.addCase(signUpNewUsuario.rejected, (state, action) => {
            return {
                ...state,
                signUpStatus: "rejected",
                signUpError: action.payload
            }
        })
        builder.addCase(loginUsuario.pending, (state, action) => {
            return {...state, loginStatus: "pending"}
        })
        builder.addCase(loginUsuario.fulfilled, (state, action) => {
            if (action.payload) {
                const usuario = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    nome: usuario.nome,
                    email: usuario.email,
                    _id: usuario._id,
                    loginStatus: "success"
                }
            } else return state
        })
        builder.addCase(loginUsuario.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload
            }
        })
    }
})

export default AuthenticationSlice.reducer
export const {loadUser, logoutUser} = AuthenticationSlice.actions

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = AuthenticationAdapter.getSelectors(state => state.auth)