import styles from './Dropdown.module.scss';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../store/slices/PopupSlice';

function Dropdown(props) {
    const [buttonPopup, setButtonPopup] = useState(false)

    const dispatch = useDispatch()

    return (
        <div className={styles.dropstart}>
            <button type="button" className={`btn btn-secondary dropdown-toggle ${styles.btnSecondary}`} data-bs-toggle="dropdown" aria-expanded="false"></button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/detalhamento_cotacoes">Cotação Diária</a></li>
                <li><a className="dropdown-item" onClick={() => dispatch(getEvent(buttonPopup))}>Adicionar à Carteira</a></li>
                <li><a className="dropdown-item" href="#watchlist-container">Watchlist</a></li>
            </ul>

        </div>
    );
}

export default Dropdown;