import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Watchlist.module.scss';
import { alterarElemento, adicionarWatchlist, fetchWatchlist, createWatchlist, alterarWatchlistId } from '../../store/slices/WatchlistSlice';


function Watchlist(props) {
    const elementos = useSelector(state => state.elementos);
    const dispatch = useDispatch();

    const user_id_mockado = 1;

    const precoCotacao = React.createRef();
    const dropdownValue = React.createRef();
    const tickerValue = React.createRef();


    async function adicionarWatchlist(e) {
        e.preventDefault();
        Promise.resolve(dispatch(alterarWatchlistId(user_id_mockado)));
        Promise.resolve(dispatch(createWatchlist({ 'user_id': user_id_mockado, 'dadosInput': {watchlist_id: props.dados.id, ticker: tickerValue.current.value , dropdown: parseInt(dropdownValue.current.value), cotacao: parseFloat(precoCotacao.current.value)}})));
        Promise.resolve(dispatch(fetchWatchlist(user_id_mockado)));
        alert('Watchlist adicionado ao perfil.');
    }

    return (
        <>
            <div className={styles.watchlistContainer} id="watchlist-container">
                <div className={styles.watchlistTitle}>
                    <h3><strong>Watchlist</strong></h3>
                </div>
                
                <form className={`centralize ${styles.watchlistForm}`}>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleTicker}`}><strong>Nome do Ticker</strong></label>
                        <input 
                            name="ticker_busca" 
                            type="text" 
                            className="form-control text-center" 
                            id="busca_ticker" 
                            aria-describedby="emailHelp" 
                            placeholder='Insira o nome do ticker' 
                            ref={tickerValue}    
                        />
                    </div>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleValue}`}><strong>{'Valor da Cotação (R$)'}</strong></label>
                        <input 
                            name="cotacao_busca" 
                            type="number" 
                            className="form-control text-center" 
                            id="busca_cotacao" 
                            aria-describedby="emailHelp" 
                            placeholder='Insira o valor determinado da cotação' 
                            ref={precoCotacao} 
                        />
                    </div>

                    <div className={`centralize mb-3 ${styles.centralize }`}>
                        <div>
                            <select name="busca_select" id="acima_abaixo" className={`form-select drop_select ${styles.dropSelect}`} aria-label="Default select example" ref={dropdownValue} >
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
                            <button type="submit" className={`btn btn-primary ${styles.submitButton}`} onClick={adicionarWatchlist}>Confirmar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}


export default Watchlist;