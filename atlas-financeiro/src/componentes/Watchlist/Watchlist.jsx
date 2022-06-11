import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Watchlist.module.scss';

function Watchlist(props) {
    const ticker = useSelector(state => state.ticker);
    const cotacao = useSelector(state => state.cotacao);
    const dropdown = useSelector(state => state.dropdown);

    const dispatch1 = useDispatch();

    function handleTickerChange(e) {
        e.preventDefault();
        dispatch1({
            type: 'altera_ticker', 
            payload: document.getElementById('busca_ticker').value
        })
    }
    
    function handleCotacaoChange(e) {
        e.preventDefault();
        dispatch1({
            type: 'altera_cotacao', 
            payload: document.getElementById('busca_cotacao').value
        })
    }
    
    function handleDropdownChange(e) {
        e.preventDefault();
        dispatch1({
            type: 'acima_abaixo', 
            payload: document.getElementById('acima_abaixo').value
        })
    }

    function mostrarBusca(e) {
        e.preventDefault();
        dispatch1({
            type: 'add_watchlist', 
            payload: [ticker, cotacao, dropdown]
        })
        alert(`Ticker: ${ticker}\nCotação: ${cotacao}\nDropdown: ${dropdown}`);
        props.setState({ visible: true });
    }

    return (
        <div className={styles.watchlistContainer} id="watchlist-container">
            <div className="watchlist">
                <h2><strong>Watchlist</strong></h2>
            </div>
            
            <form className={`centralize ${styles.watchlistForm}`}>
                <div className={`centralize mb-3  ${styles.inputBox}`}>
                    <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleTicker}`}><strong>Nome do Ticker</strong></label>
                    <input name="ticker_busca" type="text" className="form-control text-center" id="busca_ticker" aria-describedby="emailHelp" placeholder='Insira o nome do ticker' onChange={handleTickerChange}/>
                </div>
                <div className={`centralize mb-3  ${styles.inputBox}`}>
                    <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleValue}`}><strong>{'Valor da Cotação (R$)'}</strong></label>
                    <input name="cotacao_busca" type="number" className="form-control text-center" id="busca_cotacao" aria-describedby="emailHelp" placeholder='Insira o valor determinado da cotação' onChange={handleCotacaoChange}/>
                </div>

                <div className={`centralize mb-3 ${styles.centralize }`}>
                    <div>
                        <select name="busca_select" id="acima_abaixo" className={`form-select drop_select ${styles.dropSelect}`} aria-label="Default select example" onChange={handleDropdownChange}>
                            <option selected>Quando Alertar (Selecionar)</option>
                            <option value="0">Acima da Cotação</option>
                            <option value="1">Abaixo da Cotação</option>
                        </select>
                    </div>
                </div>

                <div id="emailHelp" className="form-text">Assim que o valor for atingido, um email será enviado ao usuário.</div>

                <br>
                </br>
                
                
                <div className='row'>
                    <div className='col'>
                        <button type="submit" className={`btn btn-primary ${styles.cancelButton}`} >Cancelar</button>
                    </div>
                    <div className='col'>
                        <button type="submit" className={`btn btn-primary ${styles.submitButton}`} onClick={mostrarBusca}>Confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    );

    

}


export default Watchlist;