import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateWatchlist, fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';

/**
 * @module componentes/PopupWatchlist
 */

function PopupWatchlist(props) {
    const cotacao = React.createRef();
    const dropdown = React.createRef();
    
    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    const user_id = props.user_id

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
        alert(`Dados atualizados com sucesso. ${parseFloat(cotacao.current.value)} ${parseInt(dropdown.current.value)}`);
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