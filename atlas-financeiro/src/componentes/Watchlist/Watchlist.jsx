import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Watchlist.module.scss';
import { alterarElemento, adicionarWatchlist, fetchWatchlist, createWatchlist, alterarWatchlistId } from '../../store/slices/WatchlistSlice';
import axios from 'axios';

function Watchlist(props) {
    const elementos = useSelector(state => state.elementos);
    const dispatch = useDispatch();

    const [item, setItem] = useState({
        ticker: '',
        cotacao: '',
        dropdown: ''
    })

    function handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        setItem(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
        console.log(item)
    }

    function adicionarWatchlist(event) {
        event.preventDefault()
        const newAtivo = {
            ticker: item.ticker,
            cotacao: item.cotacao,
            dropdown: item.dropdown
        }
        axios.post("/newativo", newAtivo)
    }


   

    return (
        <>
            <div className={styles.watchlistContainer} id="watchlist-container">
                <div className={styles.watchlistTitle}>
                    <h3><strong>Watchlist</strong></h3>
                </div>
                
                <form method='post' action='/:user_id' className={`centralize ${styles.watchlistForm}`}>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleTicker}`}><strong>Nome do Ticker</strong></label>
                        <input 
                            name="ticker" 
                            type="text" 
                            className="form-control text-center" 
                            id="busca_ticker" 
                            aria-describedby="emailHelp" 
                            placeholder='Insira o nome do ticker' 
                            value={item.ticker}
                            onChange={handleChange}     
                        />
                    </div>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleValue}`}><strong>{'Valor da Cotação (R$)'}</strong></label>
                        <input 
                            name="cotacao" 
                            type="number" 
                            className="form-control text-center" 
                            id="busca_cotacao" 
                            aria-describedby="emailHelp" 
                            placeholder='Insira o valor determinado da cotação' 
                            value={item.cotacao}
                            onChange={handleChange} 
                        />
                    </div>

                    <div className={`centralize mb-3 ${styles.centralize }`}>
                        <div>
                            <select 
                                name="dropdown" 
                                id="acima_abaixo" 
                                className={`form-select drop_select ${styles.dropSelect}`} 
                                aria-label="Default select example" 
                                value={item.dropdown}
                                onChange={handleChange}>
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