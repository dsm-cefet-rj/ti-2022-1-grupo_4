import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Watchlist.module.scss';
import { alterarElemento, adicionarWatchlist } from '../../store/slices/WatchlistSlice';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Watchlist(props) {
    const elementos = useSelector(state => state.elementos);
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(alterarElemento({
            "ticker": document.getElementById('busca_ticker').value,
            "cotacao": document.getElementById('busca_cotacao').value,
            "dropdown":  document.getElementById('acima_abaixo').value
        }));
    }

    function mostrarBusca(event) {
        alert(`Ticker: ${elementos['ticker']}\nCotação: ${elementos['cotacao']}\nDropdown: ${elementos['dropdown']}`);
        props.setState({ visible: true });
    }

    return (
        <>
            <Header />
            <div className={styles.watchlistContainer} id="watchlist-container">
                <div className="watchlist">
                    <h2><strong>Watchlist</strong></h2>
                </div>
                
                <form className={`centralize ${styles.watchlistForm}`}>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleTicker}`}><strong>Nome do Ticker</strong></label>
                        <input name="ticker_busca" type="text" className="form-control text-center" id="busca_ticker" aria-describedby="emailHelp" placeholder='Insira o nome do ticker' onChange={handleChange}/>
                    </div>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleValue}`}><strong>{'Valor da Cotação (R$)'}</strong></label>
                        <input name="cotacao_busca" type="number" className="form-control text-center" id="busca_cotacao" aria-describedby="emailHelp" placeholder='Insira o valor determinado da cotação' onChange={handleChange}/>
                    </div>

                    <div className={`centralize mb-3 ${styles.centralize }`}>
                        <div>
                            <select name="busca_select" id="acima_abaixo" className={`form-select drop_select ${styles.dropSelect}`} aria-label="Default select example" onChange={handleChange}>
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
            <Footer />
        </>
    );

}


export default Watchlist;