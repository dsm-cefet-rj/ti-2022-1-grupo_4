export const emailInitial = "";
export const senhaInitial = "";

export function recebeEmail (email = emailInitial, action) {
    switch (action.type) {
        case 'receber_email':
            return action.payload
    }
    return email
}

export function recebeSenha (senha = senhaInitial, action) {
    switch (action.type) {
        case 'receber_senha':
            return action.payload
    }
    return senha
}

export default { recebeEmail, recebeSenha }