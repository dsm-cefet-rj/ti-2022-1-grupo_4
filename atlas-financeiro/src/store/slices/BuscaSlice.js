const initialState = "";

function mudaBusca(busca = initialState, action) {
    if (action.type === 'alterarBusca') {
        return action.payload
    } else if (action.type === 'buscar') {
        return ''
    }
    return busca
}

export default mudaBusca;
