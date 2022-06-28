import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';
import { alterarId, createAtivoCarteira, fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';
import { fetchAtivos } from '../../store/slices/AtivosSlice';


function Popup(props) {

    const user_id_mockado = 1;

    const quantidadeAtivo = React.createRef();
    const precoMedioAtivo = React.createRef();

    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();
    
    async function inserirNaCarteira() {
        props.setTrigger(false);
        Promise.resolve(dispatch(alterarId(user_id_mockado)));
        Promise.resolve(dispatch(createAtivoCarteira({ 
            'user_id': user_id_mockado, 
            'dadosInput': {
                ativo_id: props.dados.id,
                empresa: props.dados.informacoes_gerais.empresa, 
                ticker: props.dados.informacoes_gerais.ticker, 
                quantidade: parseInt(quantidadeAtivo.current.value), 
                preco_medio: parseFloat(precoMedioAtivo.current.value), 
                rendimento: 0
            }})));
        Promise.resolve(dispatch(fetchAtivosCarteira(user_id_mockado)));
        alert('Ativo adicionado à carteira.');
    }

    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>   
                                                        
                <form>
                    <div>
                        <div className={styles.empresaTickerContainer}>
                            <span><strong>Empresa: {props.dados.informacoes_gerais.empresa}</strong>&ensp;&ensp;&ensp;&ensp;</span>
                            <span><strong>Ticker: {props.dados.informacoes_gerais.ticker}</strong></span>
                        </div>
                        <br /><br />
                        <div className={styles.quantidadePrecoMedioContainer}>
                            <div>
                                <label>Quantidade:&ensp;</label>
                                <input type='number' ref={quantidadeAtivo} />
                            </div>
                            <br />
                            <div>
                                <label>Preço Médio:&ensp;</label>
                                <input type='number' ref={precoMedioAtivo} />
                            </div>
                        </div>
                    </div>
                </form>
            
                <Button className={styles.confirmarButton} onClick={inserirNaCarteira}>Confirmar</Button>  
                <Button className={styles.cancelarButton} onClick={() => props.setTrigger(false)}>Cancelar</Button>  
            </div>
        </div>
    ) : "";
}

export default Popup