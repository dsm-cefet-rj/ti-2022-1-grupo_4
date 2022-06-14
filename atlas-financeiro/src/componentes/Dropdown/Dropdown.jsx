import styles from './Dropdown.module.scss';
import React, {useState} from 'react';
import Popup from '../Popup/Popup';

function Dropdown(props) {
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className={styles.dropstart}>
            <button type="button" className={`btn btn-secondary dropdown-toggle ${styles.btnSecondary}`} data-bs-toggle="dropdown" aria-expanded="false"></button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/detalhamento_cotacoes">Cotação Diária</a></li>
                <li><a className="dropdown-item" onClick={() => setButtonPopup(true)}>Adicionar à Carteira</a></li>
                <li><a className="dropdown-item" href="#watchlist-container">Watchlist</a></li>
            </ul>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} empresa={props.empresa} ticker={props.ticker}/>
        </div>
    );
}

export default Dropdown;