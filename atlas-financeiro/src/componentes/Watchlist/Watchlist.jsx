import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Watchlist.module.scss';
import { alterarElemento, adicionarWatchlist } from '../../store/slices/WatchlistSlice';


function Watchlist(props) {
    const elementos = useSelector(state => state.elementos);
    const dispatch = useDispatch();

    const [watchlistState, setWatchlistState] = useState({
        ticker: '',
        cotacao: null,
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setWatchlistState({...watchlistState, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(watchlistState))
        setIsSubmit(true)
    }
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(alterarElemento({
                "ticker": document.getElementById('busca_ticker').value,
                "cotacao": document.getElementById('busca_cotacao').value,
                "dropdown":  document.getElementById('acima_abaixo').value
            }));
            alert(`Ticker: ${elementos['ticker']}\nCotação: ${elementos['cotacao']}\nDropdown: ${elementos['dropdown']}`);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}

        if (!values.ticker) {
            errors.ticker = "Ticker é requerido!"
        } 
        if (!values.cotacao) {
            errors.cotacao = "Cotacao é requerida!"
        } 

        return errors
    }


    return (
        <>
            <div className={styles.watchlistContainer} id="watchlist-container">
                <div className={styles.watchlistTitle}>
                    <h3><strong>Watchlist</strong></h3>
                </div>
                
                <form className={`centralize ${styles.watchlistForm}`} onSubmit={handleSubmit}>
                    <div className={`centralize mb-3  ${styles.inputBox}`}>
                        <label for="exampleInputEmail1" className={`form-label ${styles.watchlistFormTitleTicker}`}><strong>Nome do Ticker</strong></label>
                        <input 
                            name="ticker" 
                            type="text" 
                            className="form-control text-center" 
                            id="busca_ticker" aria-describedby="emailHelp" 
                            placeholder='Insira o nome do ticker' 
                            value={watchlistState.ticker}
                            onChange={handleChange}
                            />
                        <p>{formErrors.ticker}</p>
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
                            value={watchlistState.cotacao}
                            onChange={handleChange}
                            />
                        <p>{formErrors.cotacao}</p>
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
                            <button type="submit" className={`btn btn-primary ${styles.submitButton}`} >Confirmar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );

}


export default Watchlist;