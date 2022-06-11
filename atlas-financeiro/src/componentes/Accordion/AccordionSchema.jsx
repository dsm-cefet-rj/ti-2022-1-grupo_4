import React from 'react';
// import ativos from './Ativos';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from '../Dropdown/Dropdown';
import styles from './AccordionSchema.module.scss';


function AccordionSchema (props) {
    
    return (
            <Accordion.Item eventKey={props.ticker}>
                <Accordion.Header>[{props.ticker}]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.empresa.toUpperCase()}</Accordion.Header>
                <Accordion.Body>
                    <div className={styles.tableHeader}>
                                
                        <h3 className={styles.tableHeaderH3}><strong>Informações Gerais</strong></h3>

                        <Dropdown />
                    </div>
                    <table className="info-geral"> 
                                
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{props.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.vol_medio_2m)}</td>
                        </tr>
                    </table>
                    <div className={styles.lerMais}><a href="/detalhamento_indicadores">Ler mais</a></div>
                </Accordion.Body>
            </Accordion.Item>

    );
}

export default AccordionSchema;



                            