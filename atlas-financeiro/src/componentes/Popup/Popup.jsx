import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>   
                                                        
                <form>
                    <div>
                        <div className={styles.empresaTickerContainer}>
                            <span><strong>Empresa: {props.empresa}</strong>&ensp;&ensp;&ensp;&ensp;</span>
                            <span><strong>Ticker: {props.ticker}</strong></span>
                        </div>
                        <br /><br />
                        <div className={styles.quantidadePrecoMedioContainer}>
                            <div>
                                <label>Quantidade:&ensp;</label>
                                <input type='number' />
                            </div>
                            <br />
                            <div>
                                <label>Preço Médio:&ensp;</label>
                                <input type='number' />
                            </div>
                        </div>
                    </div>
                </form>
            
                <Button className={styles.confirmarButton} onClick={() => props.setTrigger(false)}>Confirmar</Button>  
                <Button className={styles.cancelarButton} onClick={() => props.setTrigger(false)}>Cancelar</Button>  
            </div>
        </div>
    ) : "";
}

export default Popup