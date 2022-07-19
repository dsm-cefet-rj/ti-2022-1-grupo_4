import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Watchlist.module.scss';
import {fetchAtivosCarteira, createWatchlist, alterarId } from  '../../store/slices/CarteiraSlice';

/**
 * @module componentes/Watchlist
 */

/** 
 * @typedef Watchlist
 * @type {React.ReactElement}
 * @property {object} user_id - representa o id do usuário que deseja adicionar um novo ativo.
 * @property {number} watchlistId - representa o novo id gerando pela adição de um novo ativo.
 * @property {number} precoCotacao - representa o preço inserido pelo usuário do novo ativo na watchlist.
 * @property {boolean} dropdownValue - representa o preço de subida ou descida do novo ativo na watchlist.
 * @property {string} tickerValue - representa o nome do ticker do novo ativo na watchlist.
 */

/**
 * @param {object} props - objeto que contém o id do usuário e o objeto Carteira, a partir do qual é possível acessar a watchlist do usuário
 * @returns {React.ReactElement} A renderização da lista de ativos na watchlist do usuário.
 */

function Watchlist(props) {
    const dispatch = useDispatch();
    
    const user_id = props.user_id;
    const watchlistId = props.carteira.watchlist.length
    const precoCotacao = React.createRef();
    const dropdownValue = React.createRef();
    const tickerValue = React.createRef();

    /**
     * Função que realiza a busca, quando o usuário digita a string de busca
     * @async
     * @function adicionarWatchlist
     * @param {object} e - evento, utilizado para chamar a função preventDefault
     */
    async function adicionarWatchlist(e) {
        e.preventDefault();
        Promise.resolve(dispatch(alterarId({user_id})));
        Promise.resolve(dispatch(createWatchlist({ 
            'user_id': user_id, 
            'dadosInput': {
                watchlist_id: watchlistId, 
                ticker: tickerValue.current.value, 
                dropdown: parseInt(dropdownValue.current.value), 
                cotacao: parseFloat(precoCotacao.current.value)
            }})));
        Promise.resolve(dispatch(fetchAtivosCarteira({user_id})));
        window.location.reload(false);
        alert(`Ativo adicionado a sua Watchlist!`);
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
                            name="ticker" 
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
                            name="cotacao" 
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
                            <select name="dropdown" id="acima_abaixo" className={`form-select drop_select ${styles.dropSelect}`} aria-label="Default select example" ref={dropdownValue} >
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