import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Popup.module.scss';

function Popup(props) {
    const [carteiraState, setCarteiraState] = useState({
        quantidade:'',
        preco: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setCarteiraState({...carteiraState, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(carteiraState))
        setIsSubmit(true)
    }
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(carteiraState)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}

        if (!values.quantidade) {
            errors.quantidade = "Quantidade é requerida!"
        } else if (values.quantidade <= 0) {
            errors.quantidade = "Quantidade mínima de 1!"
        }

        if (!values.preco) {
            errors.preco = "Preço médio é requerido!"
        } 
        return errors
    }

    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>   
                                                        
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.empresaTickerContainer}>
                            <span><strong>Empresa: {props.empresa}</strong>&ensp;&ensp;&ensp;&ensp;</span>
                            <span><strong>Ticker: {props.ticker}</strong></span>
                        </div>
                        <br /><br />
                        <div className={styles.quantidadePrecoMedioContainer}>
                            <div>
                                <label>Quantidade:&ensp;</label>
                                <input 
                                    type='number' 
                                    name='quantidade' 
                                    value={carteiraState.quantidade} 
                                    onChange={handleChange}
                                    />
                                <p>{formErrors.quantidade}</p>
                            </div>
                            <br />
                            <div>
                                <label>Preço Médio:&ensp;</label>
                                <input 
                                    type='number' 
                                    name='preco'
                                    value={carteiraState.preco} 
                                    onChange={handleChange}
                                />
                                <p>{formErrors.preco}</p>
                            </div>
                        </div>
                    </div>
                    <Button className={styles.confirmarButton} onClick={() => props.setTrigger(false)} type='submit' id='submit'>Confirmar</Button>  
                    <Button className={styles.cancelarButton} onClick={() => props.setTrigger(false)} type='submit' id='submit'>Cancelar</Button> 
                </form>
             
            </div>
        </div>
    ) : "";
}

export default Popup