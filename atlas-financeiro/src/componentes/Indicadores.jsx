import React from 'react';
import './styles/Indicadores.css';

const indicadores = {
    empresa: 'Vale',
    ticker: 'PETR4',
    tipo: 'ON',
    max_52: 102.32,
    min_52: 47.85,
    setor: 'Mineração',
    subsetor: 'Minerais Metálicos',
    vol_medio_2m: 2968530000,
    valor_mercado: 416370000000,
    valor_firma: 439638000000,
    ult_balanco_proc: '31/03/22',
    numero_acoes: 4999040000,
    oscilacao_dia: -1.08,
    oscilacao_mes: -12.88,
    oscilacao_30_dias: -11.88,
    oscilacao_12_meses: -13.03,
    oscilacao_2022: 10.95,
    oscilacao_2021: 4.73,
    oscilacao_2020: 70.47,
    oscilacao_2019: 6.85,
    oscilacao_2018: 31.11,
    oscilacao_2017: 66.67,
    pl: 3.66,
    lpa: 22.75,
    p_vp: 2.34,
    vpa: 35.67,
    p_ebit: 2.57,
    margem_bruta: 58.7,
    psr: 1.48,
    margem_ebit: 57.8,
    p_ativos: 0.94,
    margem_liquida: 40.7,
    p_cap_giro: 18.32,
    ebit_ativo: 36.8,
    p_ativo_circ_liq: -2.50,
    roic: 42.5,
    dividend_yield: 17.7,
    roe: 63.8,
    ev_ebitda: 2.47,
    liquidez_corrente: 1.33,
    ev_ebit: 2.71,
    divbr_patrimonio: 0.37,
    cresc_receita_5_anos: 27.9,
    giro_ativos: 0.64,
    ativo: 441316000000,
    divida_bruta: 66403000000,
    disponibilidades: 43135000000,
    divida_liquida: 23268000000,
    ativo_circulante: 92219000000,
    patrimonio_liquido: 178314000000,
    receita_liquida_3_meses: 56719000000,
    receita_liquida_12_meses: 280942000000,
    ebit_3_meses: 31916000000,
    ebit_12_meses: 162245000000,
    lucro_liquido_3_meses: 23046000000,
    lucro_liquido_12_meses: 113710000000,
    
}

const TabelaIndicadores = (props) => {
    return(
        <>
        <section className="light-section">
        <div>

            <div id="detalhamento">
                <div className="table-title">
                    <h3>Detalhamento do Ativo</h3>
                </div>

                <div className="table-info">
                    <div className="btn-group dropstart">
                        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-indicadores" data-bs-toggle="dropdown" aria-expanded="false"></button>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#cotacao-diaria-container">Cotação Diária</a></li>
                            <li><a className="dropdown-item" href="/perfil">Adicionar à Carteira</a></li>
                            <li><a className="dropdown-item" href="/perfil">Watchlist</a></li>
                        </ul>
                    </div>

                    <table className="info-geral"> 
                        <tr>
                            <th colSpan="4">Informações Gerais</th>
                        </tr>
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{indicadores.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{indicadores.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{indicadores.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{indicadores.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{indicadores.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{indicadores.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{indicadores.subsetor}</td>
                            <td><strong>Vol $ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.vol_medio_2m)}</td>
                        </tr>
                    </table>
                    <br />
                    <table className="info-geral-plus">
                        <tr>
                            <td><strong>Valor de mercado:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.valor_mercado)}</td>
                            <td><strong>Últ balanço processado:</strong></td>
                            <td>{indicadores.ult_balanco_proc}</td>
                        </tr>
                        <tr>
                            <td><strong>Valor da firma:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.valor_firma)}</td>
                            <td><strong>Nro.Ações:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.numero_acoes)}</td>
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
                                        <td>{parseFloat(indicadores.oscilacao_dia).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Mês:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_mes).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>30 dias:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_30_dias).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>12 meses:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_12_meses).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2022:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2022).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2021:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2021).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2020:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2020).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2019:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2019).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2018:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2018).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>2017:</strong></td>
                                        <td>{parseFloat(indicadores.oscilacao_2017).toFixed(2)}%</td>
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
                                        <td>{indicadores.pl}</td>
                                        <td><strong>LPA:</strong></td>
                                        <td>{indicadores.lpa}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/VP:</strong></td>
                                        <td>{indicadores.p_vp}</td>
                                        <td><strong>VPA:</strong></td>
                                        <td>{indicadores.vpa}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/EBIT:</strong></td>
                                        <td>{indicadores.p_ebit}</td>
                                        <td><strong>Marg. Bruta:</strong></td>
                                        <td>{parseFloat(indicadores.margem_bruta).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>PSR:</strong></td>
                                        <td>{indicadores.psr}</td>
                                        <td><strong>Mar. EBIT:</strong></td>
                                        <td>{parseFloat(indicadores.margem_ebit).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Ativos:</strong></td>
                                        <td>{indicadores.p_ativos}</td>
                                        <td><strong>Marg. Líquida:</strong></td>
                                        <td>{parseFloat(indicadores.margem_liquida).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Cap. Giro:</strong></td>
                                        <td>{indicadores.p_cap_giro}</td>
                                        <td><strong>EBIT/Ativo:</strong></td>
                                        <td>{parseFloat(indicadores.ebit_ativo).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>P/Ativ Circ Liq:</strong></td>
                                        <td>{indicadores.p_ativo_circ_liq}</td>
                                        <td><strong>ROIC:</strong></td>
                                        <td>{parseFloat(indicadores.roic).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Div. Yield:</strong></td>
                                        <td>{parseFloat(indicadores.dividend_yield).toFixed(2)}%</td>
                                        <td><strong>ROE:</strong></td>
                                        <td>{parseFloat(indicadores.roe).toFixed(2)}%</td>
                                    </tr>
                                    <tr>
                                        <td><strong>EV/EBITDA:</strong></td>
                                        <td>{indicadores.ev_ebitda}</td>
                                        <td><strong>Liquidez Corr:</strong></td>
                                        <td>{indicadores.liquidez_corrente}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>EV/EBIT:</strong></td>
                                        <td>{indicadores.ev_ebit}</td>
                                        <td><strong>Div Br/Patrim:</strong></td>
                                        <td>{indicadores.divbr_patrimonio}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Cres. Rec(5a):</strong></td>
                                        <td>{parseFloat(indicadores.cresc_receita_5_anos).toFixed(2)}%</td>
                                        <td><strong>Giro Ativos:</strong></td>
                                        <td>{indicadores.giro_ativos}</td>
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
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.ativo)}</td>
                            <td><strong>Dív. Bruta:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.divida_bruta)}</td>
                         </tr>
                        <tr>
                            <td><strong>Disponibilidades:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.disponibilidades)}</td>
                             <td><strong>Dív. Líquida:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.divida_liquida)}</td>
                        </tr>
                        <tr>
                            <td><strong>Ativo Circulante:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.ativo_circulante)}</td>
                            <td><strong>Patrim. Líq:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.patrimonio_liquido)}</td>
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
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.receita_liquida_12_meses)}</td>
                            <td><strong>Receita Líquida:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.receita_liquida_3_meses)}</td>
                        </tr>
                        <tr>
                            <td><strong>EBIT:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.ebit_12_meses)}</td>
                            <td><strong>EBIT:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.ebit_3_meses)}</td>
                        </tr>
                        <tr>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.lucro_liquido_12_meses)}</td>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(indicadores.lucro_liquido_3_meses)}</td>
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
export {indicadores};