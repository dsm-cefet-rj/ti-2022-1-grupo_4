
function Dropdown() {
    return (
        <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/detalhamento_cotacoes">Cotação Diária</a></li>
                <li><a className="dropdown-item" href="/carteira-perfil">Adicionar à Carteira</a></li>
                <li><a className="dropdown-item" href="#watchlist-container">Watchlist</a></li>
            </ul>
        </div>
    );
}

export default Dropdown;