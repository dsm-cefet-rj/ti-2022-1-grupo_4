


const initialSearch = ''

export default function mudaBusca(busca = initialSearch, action) {
    if (action.type === 'alterarBusca') {
        return action.payload
    } else if (action.type === 'buscar') {
        return ''
    }
    return busca
}
