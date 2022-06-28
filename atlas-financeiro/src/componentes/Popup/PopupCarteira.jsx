import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { updateAtivoCarteira, fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';
import { useParams } from 'react-router-dom';


function PopupCarteira(props) {

    const quantidadeAtivo = React.createRef();
    const precoMedioAtivo = React.createRef();
    
    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    const user_id = props.user_id

    async function atualizarCarteira() {
        props.setTrigger(false);
        Promise.resolve(dispatch(updateAtivoCarteira({ 
            'user_id': user_id, 
            'ativo_id': props.dados.ativo_id, 
            'dadosAtualizados': {
                quantidade: parseInt(quantidadeAtivo.current.value), 
                precoMedio: parseFloat(precoMedioAtivo.current.value)
            }})));
        window.location.reload(false);
        alert('Dados atualizados com sucesso.');
    }

    
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>   
                                                        
                <form>
                    <div>
                        <div className={styles.empresaTickerContainer}>
                            <span><strong>Empresa: {props.dados.empresa}</strong>&ensp;&ensp;&ensp;&ensp;</span>
                            <span><strong>Ticker: {props.dados.ticker}</strong></span>
                        </div>
                        <br /><br />
                        <div className={styles.quantidadePrecoMedioContainer}>
                            <div>
                                <label>Quantidade:&ensp;</label>
                                <input type='number' ref={ quantidadeAtivo } />
                            </div>
                            <br />
                            <div>
                                <label>Preço Médio:&ensp;</label>
                                <input type='number' ref={ precoMedioAtivo } />
                            </div>
                        </div>
                    </div>
                </form>
            
                <Button className={styles.confirmarButton} onClick={atualizarCarteira}>Confirmar</Button>  
                <Button className={styles.cancelarButton} onClick={() => props.setTrigger(false)}>Cancelar</Button>  
            </div>
        </div>
    ) : "";
}

export default PopupCarteira