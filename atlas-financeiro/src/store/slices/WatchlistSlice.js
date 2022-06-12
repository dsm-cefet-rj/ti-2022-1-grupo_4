const tickerInicial = ''
const cotacaoInicial = ''
const dropdownInicial = ''

export function alteraTicker(ticker = tickerInicial, action) {
    if (action.type === 'altera_ticker') {
        return action.payload;
    }
    return ticker;
}

export function alteraCotacao(cotacao = cotacaoInicial, action) {
    if (action.type === 'altera_cotacao') {
        return action.payload;
    }
    return cotacao;
}

export function alteraDropdown(dropdown = dropdownInicial, action) {
    if (action.type === 'acima_abaixo') {
        if (action.payload == 0) {
            return 'Acima da Cotação'
        } else if (action.payload == 1) {
            return 'Abaixo da Cotação'
        }
    }
    return dropdown;
}

export function adicionaWatchlist(busca = [tickerInicial, cotacaoInicial, dropdownInicial], action) {
    if(action.type === 'add_watchlist') {
        return action.payload
    }
    return busca;
}

export default { alteraTicker, alteraCotacao, alteraDropdown, adicionaWatchlist }