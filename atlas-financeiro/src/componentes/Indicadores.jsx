import React from 'react';
import './styles/Indicadores.css';

const TabelaIndicadores = (props) => {
    return(
        <>
        <section className="light-section">
        <div>

            <div id="detalhamento">
                <div className="table-title">
                    <h3>Detalhamento do Ativo</h3>
                    <h2><strong>{props.indicadores.ticker}</strong></h2>
                </div>

                <div className="table-info">
                    <table className="info-geral"> 
                        <thead>
                            <tr>
                                <th colSpan="4">Informações Gerais</th>
                                <th className="btn-group dropstart">
                                    <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></button>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <li><a className="dropdown-item" href="cotacao-diaria.html">Cotação Diária</a></li>
                                  <li><a className="dropdown-item" href="perfil.html">Adicionar à Carteira</a></li>
                                  <li><a className="dropdown-item" href="cotacao-diaria.html">Watchlist</a></li>
                                </ul>
                                </th>
                            </tr>
                        </thead>

                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{props.indicadores.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.indicadores.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.indicadores.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.indicadores.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.indicadores.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.indicadores.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.indicadores.subsetor}</td>
                            <td><strong>Vol $ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.vol_medio_2m)}</td>
                        </tr>
                    </table>
                    <br />
                    <table className="info-geral-plus">
                        <tr>
                            <td><strong>Valor de mercado:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.valor_mercado)}</td>
                            <td><strong>Últ balanço processado:</strong></td>
                            <td>{props.indicadores.ult_balanco_proc}</td>
                        </tr>
                        <tr>
                            <td><strong>Valor da firma:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.valor_firma)}</td>
                            <td><strong>Nro.Ações:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.numero_acoes)}</td>
                        </tr>
                    </table>
        
                    <br />
        
                    <div className='row'>
                        <div className='column'>
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="4">Oscilações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Dia:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_dia).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mês:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_mes).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>30 dias:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_30_dias).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>12 meses:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_12_meses).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2022:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2022).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2021:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2021).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2020:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2020).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2019:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2019).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2018:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2018).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2017:</strong></td>
                                        <td>{parseFloat(props.indicadores.oscilacao_2017).toFixed(2)}%</td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>

                        <div className='column'>
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="4">Indicadores Fundamentalistas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>P/L:</strong></td>
                                        <td>{props.indicadores.pl}</td>
                                        <td><strong>LPA:</strong></td>
                                        <td>{props.indicadores.lpa}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/VP:</strong></td>
                                        <td>{props.indicadores.p_vp}</td>
                                        <td><strong>VPA:</strong></td>
                                        <td>{props.indicadores.vpa}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/EBIT:</strong></td>
                                        <td>{props.indicadores.p_ebit}</td>
                                        <td><strong>Marg. Bruta:</strong></td>
                                        <td>{parseFloat(props.indicadores.margem_bruta).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>PSR:</strong></td>
                                        <td>{props.indicadores.psr}</td>
                                        <td><strong>Mar. EBIT:</strong></td>
                                        <td>{parseFloat(props.indicadores.margem_ebit).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Ativos:</strong></td>
                                        <td>{props.indicadores.p_ativos}</td>
                                        <td><strong>Marg. Líquida:</strong></td>
                                        <td>{parseFloat(props.indicadores.margem_liquida).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Cap. Giro:</strong></td>
                                        <td>{props.indicadores.p_cap_giro}</td>
                                        <td><strong>EBIT/Ativo:</strong></td>
                                        <td>{parseFloat(props.indicadores.ebit_ativo).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Ativ Circ Liq:</strong></td>
                                        <td>{props.indicadores.p_ativo_circ_liq}</td>
                                        <td><strong>ROIC:</strong></td>
                                        <td>{parseFloat(props.indicadores.roic).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Div. Yield:</strong></td>
                                        <td>{parseFloat(props.indicadores.dividend_yield).toFixed(2)}%</td>
                                        <td><strong>ROE:</strong></td>
                                        <td>{parseFloat(props.indicadores.roe).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>EV/EBITDA:</strong></td>
                                        <td>{props.indicadores.ev_ebitda}</td>
                                        <td><strong>Liquidez Corr:</strong></td>
                                        <td>{props.indicadores.liquidez_corrente}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>EV/EBIT:</strong></td>
                                        <td>{props.indicadores.ev_ebit}</td>
                                        <td><strong>Div Br/Patrim:</strong></td>
                                        <td>{props.indicadores.divbr_patrimonio}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cres. Rec(5a):</strong></td>
                                        <td>{parseFloat(props.indicadores.cresc_receita_5_anos).toFixed(2)}%</td>
                                        <td><strong>Giro Ativos:</strong></td>
                                        <td>{props.indicadores.giro_ativos}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
        
                    <br />
        
                    <table className="balanco-patrimonial">   
                        <tr>
                            <th colSpan="4">Dados Balanço Patrimonial</th>
                        </tr>
                        <tr>
                            <td><strong>Ativo:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.ativo)}</td>
                            <td><strong>Dív. Bruta:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.divida_bruta)}</td>
                         </tr>
                        <tr>
                            <td><strong>Disponibilidades:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.disponibilidades)}</td>
                             <td><strong>Dív. Líquida:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.divida_liquida)}</td>
                        </tr>
                        <tr>
                            <td><strong>Ativo Circulante:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.ativo_circulante)}</td>
                            <td><strong>Patrim. Líq:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.patrimonio_liquido)}</td>
                        </tr>      
                    </table>
        
                    <br />
        
                    <table className="demonstrativos-resultados">
                        <tr>
                            <th colSpan="4">Dados demonstrativos de resultados</th>
                        </tr>
                        <tr>
                            <th colSpan="2">Últimos 12 meses</th>
                            <th colSpan="2">Últimos 3 meses</th>
                        </tr>
                        <tr>
                            <td><strong>Receita Líquida:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.receita_liquida_12_meses)}</td>
                            <td><strong>Receita Líquida:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.receita_liquida_3_meses)}</td>
                        </tr>
                        <tr>
                            <td><strong>EBIT:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.ebit_12_meses)}</td>
                            <td><strong>EBIT:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.ebit_3_meses)}</td>
                        </tr>
                        <tr>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.lucro_liquido_12_meses)}</td>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.indicadores.lucro_liquido_3_meses)}</td>
                        </tr>  
                    </table>
                </div>
            </div>
    </div>
    </section>
        </>
    );
}

export default TabelaIndicadores;