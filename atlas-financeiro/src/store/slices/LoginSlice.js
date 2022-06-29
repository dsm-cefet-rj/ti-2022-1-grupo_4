import { createEntityAdapter, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { httpGet } from "../../utils";
import {baseUrl} from '../../baseUrl'

export const loginAdapter = createEntityAdapter({
    selectId: (usuarios) => usuarios.id
})

// export const fetchLogin = createAsyncThunk('usuarios/fetchLogin', async () => {
//     return await httpGet(`${baseUrl}/usuarios/login`) 
// }) 

export const fetchLogin = createAsyncThunk('usuarios/fetchLogin', async () => {
        debugger;
        var res = await fetch('http://localhost:3004/usuarios', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((res) => res.json());
});

export const loginSlice = createSlice ({
    name: 'usuarios',
    initialState: loginAdapter.getInitialState(),
    extraReducers: {
        [fetchLogin.pending]: (state, action) => {state.status = 'loading'},
        [fetchLogin.fulfilled]: (state, action) => {state.status = 'loaded'; loginAdapter.setAll(state, action.payload);},
        [fetchLogin.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar usuarios: ' + action.error.message},
    }
})

export default loginSlice.reducer

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = loginAdapter.getSelectors(state => state.usuarios)