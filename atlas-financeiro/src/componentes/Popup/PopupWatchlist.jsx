import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateWatchlist, fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';

/**
 * @module componentes/PopupWatchlist
 */

/** 
 * @typedef PopupWatchlist
 * @type {React.ReactElement}
 * @property {number} cotacao - representa a quantidade de ativos atualizados na watchlist do usuário.
 * @property {number} dropdown - representa o preço de subida ou descida do ativo atualizados na watchlist do usuário.
 * @property {object} user_id - representa o token do usuário logado no site, que será utilizado para a adiciona dos ativos na watchlist do mesmo.
 */

/**
 * @returns {React.ReactElement} A renderização da tela de popup para a atualização do ativo na watchlist do usuário.
 */

function PopupWatchlist(props) {
    const cotacao = React.createRef();
    const dropdown = React.createRef();
    
    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    const user_id = props.user_id

    /**
     * Função que atualiza ativo na watchlist do usuário.
     * @async
     * @function atualizarAtivoWatchlist
     */
    async function atualizarAtivoWatchlist() {
        props.setTrigger(false);
        Promise.resolve(dispatch(updateWatchlist({ 
            'user_id': user_id, 
            'watchlist_id': props.dados.watchlist_id, 
            'dadosAtualizadosAtivo': {
                cotacao: parseFloat(cotacao.current.value), 
                dropdown: parseInt(dropdown.current.value)
            }})));
        window.location.reload(false);
        alert(`Dados atualizados com sucesso!`);
    }

    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>   
                                                        
                <form>
                    <div>
                        <div className={styles.empresaTickerContainer}>
                            <span><strong>Ticker: {props.dados.ticker}</strong></span>
                        </div>
                        <br /><br />
                        <div className={styles.quantidadePrecoMedioContainer}>
                            <div>
                                <label>Valor da Cotação (R$):&ensp;</label>
                                <input name='cotacao' type='number' ref={ cotacao } />
                            </div>
                            <br />
                            <div>
                                <label>Alerta:&ensp;</label>
                                <select name="dropdown" id="acima_abaixo" className={`form-select drop_select`} aria-label="Default select example" ref={dropdown} >
                                    <option selected>Quando Alertar (Selecionar)</option>
                                    <option value="0">Acima da Cotação</option>
                                    <option value="1">Abaixo da Cotação</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            
                <Button className={styles.confirmarButton} onClick={atualizarAtivoWatchlist}>Confirmar</Button>  
                <Button className={styles.cancelarButton} onClick={() => props.setTrigger(false)}>Cancelar</Button>  
            </div>
        </div>
    ) : ""
}

export default PopupWatchlist