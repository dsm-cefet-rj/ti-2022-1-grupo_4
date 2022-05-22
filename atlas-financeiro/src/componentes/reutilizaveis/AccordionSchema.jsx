import React from 'react';
import { Ativo } from './Ativo';
import Accordion from 'react-bootstrap/Accordion';

function AccordionSchema (props) {
    
    return (
            <Accordion.Item eventKey={props.ticker}>
                <Accordion.Header>[{props.ticker}]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.empresa.toUpperCase()}</Accordion.Header>
                <Accordion.Body>
                    <div class="table-header">
                                
                        <h3><strong>Informações Gerais</strong></h3>

                        <div class="btn-group dropstart">
                            <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="/detalhamento">Cotação Diária</a></li>
                                <li><a class="dropdown-item" href="/perfil">Adicionar à Carteira</a></li>
                                <li><a class="dropdown-item" href="#watchlist-container">Watchlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <table class="info-geral"> 
                                
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{props.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes.cotacoes[0].data}</td>
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
                    <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                </Accordion.Body>
            </Accordion.Item>

    );
}

export default AccordionSchema;



                            