import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { httpGet, httpPost } from "../../utils";
import {baseUrl} from '../../baseUrl'

// creating entityAdapter
const signUpAdapter = createEntityAdapter({
    selectId: (usuarios) => usuarios.id
})


// GET usuarios.json 
export const fetchSignUp = createAsyncThunk('usuarios/fetchSignUp', async () => {
    return await httpGet(`${baseUrl}/usuarios`) 
}) 

// ADD usuarios.json
export const addSignUpServer = createAsyncThunk('usuarios/addSignUpServer', async (usuario) => {
    return await httpPost(`${baseUrl}/usuarios`, usuario)
})

// creating slice
export const SignUpSlice = createSlice ({
    name: 'usuarios',
    initialState: signUpAdapter.getInitialState(),
    extraReducers: {
        [fetchSignUp.pending]: (state, action) => {state.status = 'loading'},
        [addSignUpServer.pending]: (state, action) => {state.status = 'saving'},
        [fetchSignUp.fulfilled]: (state, action) => {state.status = 'loaded'; signUpAdapter.setAll(state, action.payload);},
        [addSignUpServer.fulfilled]: (state, action) => {state.status = 'saved'; signUpAdapter.addOne(state, action.payload);},
        [fetchSignUp.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar usuarios: ' + action.error.message},
        [addSignUpServer.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar usuario: ' + action.error.message}, 
    }
})


export default SignUpSlice.reducer

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = signUpAdapter.getSelectors(state => state.usuarios)