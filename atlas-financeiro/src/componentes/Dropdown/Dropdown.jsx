import styles from './Dropdown.module.scss';
import React from 'react';

function Dropdown(props) {
    const key = props.ticker;
    
    function addCarteira(e) {
        e.preventDefault();
        // pegar os dados do ativos
        // mandar um alert de sucesso
        alert(`Ticker: ${key}`);
    }

    return (
        <div className={styles.dropstart}>
            <button type="button" className={`btn btn-secondary dropdown-toggle ${styles.btnSecondary}`} data-bs-toggle="dropdown" aria-expanded="false"></button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/detalhamento_cotacoes">Cotação Diária</a></li>
                <li><a className="dropdown-item" href="/carteira-perfil" onClick={addCarteira}>Adicionar à Carteira</a></li>
                <li><a className="dropdown-item" href="#watchlist-container">Watchlist</a></li>
            </ul>
        </div>
    );
}

export default Dropdown;