import React from 'react';
import styles from './Dropdown.module.scss';

/**
 * @module componentes/Dropdown
 */

/**
 * Função chamada para criar pequeno menu para o usuario ter acesso as cotações diarias e indicadores de um ativo.
 * @param {object} props.ativo 
 * @returns {html}
 */


function Dropdown(props) {

    return (
        <div className={styles.dropstart}>
            <button type="button" className={`btn btn-secondary dropdown-toggle ${styles.btnSecondary}`} data-bs-toggle="dropdown" aria-expanded="false"></button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a className="dropdown-item" href="/detalhamento_cotacoes">Cotação Diária</a></li>
                <li><a className="dropdown-item" href="/detalhamento_indicadores">Indicadores Fundamentalistas</a></li>
            </ul>

        </div>
    );
}

export default Dropdown;