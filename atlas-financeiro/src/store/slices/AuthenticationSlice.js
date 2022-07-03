import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const AuthenticationAdapter = createEntityAdapter({
    selectId: (usuarios) => usuarios.usuario_id
})

// pegar os objetos de cada usuario no carteiras.json
export const fetchUsuarios = createAsyncThunk('carteira/fetchUsuarios',
async () => {
    try{
        const res = await (await fetch('http://localhost:3004/carteira')).json();
        return res;
    } catch(error) {
        return {};
    }
})

// cadastrar um novo usuário e colocar ele em carteiras.json
export const signUpNewUsuario = createAsyncThunk('carteira/signUpNewUsuario',
async({ user_id, dadosInput }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/sign-up`, {
        method: 'POST',
        body: JSON.stringify(dadosInput),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data;
})

// fazer o login do usuario, baseado em um objeto q ja está no carteiras.json e afazer a comparação
export const loginUsuario = createAsyncThunk('carteira/loginUsuario',
async({ user_id, dadosInput }) => {
    const data = await fetch(`http://localhost:3004/carteira/${user_id}/login`, {
        method: 'POST',
        body: JSON.stringify(dadosInput),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((res) => res.json())
    return data;
})


export const AuthenticationSlice = createSlice ({
    name: 'usuarios',
    initialState: AuthenticationAdapter.getInitialState(),
    extraReducers: {
        [fetchUsuarios.pending]: (state, action) => {state.status = 'loading'},
        [signUpNewUsuario.pending]: (state, action) => {state.status = 'saving'},
        [fetchUsuarios.fulfilled]: (state, action) => {state.status = 'loaded'; AuthenticationAdapter.setAll(state, action.payload);},
        [signUpNewUsuario.fulfilled]: (state, action) => {state.status = 'saved'; AuthenticationAdapter.addOne(state, action.payload);},
        [fetchUsuarios.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao buscar usuarios: ' + action.error.message},
        [signUpNewUsuario.rejected]: (state, action) => {state.status = 'failed'; state.error = 'Falha ao adicionar usuario: ' + action.error.message}, 
    }
})

export default AuthenticationSlice.reducer

export const {
    selectAll: selectAllUsuarios,
    selectById: selectUsuariosById,
    selectIds: selectUsuariosIds
} = AuthenticationAdapter.getSelectors(state => state.usuarios)