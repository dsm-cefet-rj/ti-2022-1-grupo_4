import React from 'react'
import styles from './IndicadoresVisitante.module.scss'

function IndicadoresVisitante(props){
    return(
        <>
        <section className="light-section">
        <div>
    
            <div className=''>
                <div className={styles.tableTitle}>
                    <h3>Detalhamento do Ativo</h3>
                    <h2><strong>{props.ticker}</strong></h2>
                </div>
    
                <div className={styles.tableInfo}>
                    <table className="info-geral"> 
                        <thead>
                            <tr>
                                <th colSpan="4">Informações Gerais</th>
                            </tr>
                        </thead>
    
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>VALE3</td>
                            <td><strong>Cotação:</strong></td>
                            <td>83,29</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>ON NM</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>29/04/2022</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>VALE ON NM</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>60,02</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>Mineração</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>102,32</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>Minerais Metálicos</td>
                            <td><strong>Vol $ méd(2m):</strong></td>
                            <td>2.968.530.000</td>
                        </tr>
                    </table>
                    <br />
                    <table className="info-geral-plus">
                        <tr>
                            <td><strong>Valor de mercado:</strong></td>
                            <td>416.370.000.000</td>
                            <td><strong>Últ balanço processado:</strong></td>
                            <td>31/03/22</td>
                        </tr>
                        <tr>
                            <td><strong>Valor da firma:</strong></td>
                            <td>439.638.000.000</td>
                            <td><strong>Nro.Ações:</strong></td>
                            <td>4.999.040.000</td>
                        </tr>
                    </table>
            
                    <br />
            
                    <table className="oscilacoes-indicadores">
                        <tr>
                            <th colspan="2">Oscilações</th>
                            <th colspan="4">Indicadores fundamentalistas</th>
                            </tr>
                        <tr>
                            <td><strong>Dia:</strong></td>
                            <td>-1,08%</td>
                            <td><strong>P/L:</strong></td>
                            <td>3,66</td>
                            <td><strong>LPA:</strong></td>
                            <td>22,75</td>
                        </tr>
                        <tr>
                            <td><strong>Mês:</strong></td>
                            <td>-12,88%</td>
                            <td><strong>P/VP:</strong></td>
                            <td>2,34</td>
                            <td><strong>VPA:</strong></td>
                            <td>35,67</td>
                        </tr>
                        <tr>
                            <td><strong>30 dias:</strong></td>
                            <td>-11,88%</td>
                            <td><strong>P/EBIT:</strong></td>
                            <td>2,57</td>
                            <td><strong>Marg. Bruta:</strong></td>
                            <td>58,7%</td>
                        </tr>
                        <tr>
                            <td><strong>12 meses:</strong></td>
                            <td>-13,03%</td>
                            <td><strong>PSR:</strong></td>
                            <td>1,48</td>
                            <td><strong>Mar. EBIT:</strong></td>
                            <td>57,8%</td>
                        </tr>
                        <tr>
                            <td><strong>2022:</strong></td>
                            <td>10,95%</td>
                            <td><strong>P/Ativos:</strong></td>
                            <td>0,94</td>
                            <td><strong>Marg. Líquida:</strong></td>
                            <td>40,7%</td>
                        </tr>
                        <tr>
                            <td><strong>2021:</strong></td>
                            <td>4,73%</td>
                            <td><strong>P/Cap. Giro:</strong></td>
                            <td>18,32</td>
                            <td><strong>EBIT/Ativo:</strong></td>
                            <td>36,8%</td>
                        </tr>
                        <tr>
                            <td><strong>2020:</strong></td>
                            <td>70,47%</td>
                            <td><strong>P/Ativ Circ Liq:</strong></td>
                            <td>-2,50</td>
                            <td><strong>ROIC:</strong></td>
                            <td>42,5%</td>
                        </tr>
                        <tr>
                            <td><strong>2019:</strong></td>
                            <td>6,85%</td>
                            <td><strong>Div. Yield:</strong></td>
                            <td>17,7%</td>
                            <td><strong>ROE:</strong></td>
                            <td>63,8%</td>
                        </tr>
                        <tr>
                            <td><strong>2018:</strong></td>
                            <td>31,11%</td>
                            <td><strong>EV/EBITDA:</strong></td>
                            <td>2,47</td>
                            <td><strong>Liquidez Corr:</strong></td>
                            <td>1,33</td>
                        </tr>
                        <tr>
                            <td><strong>2017:</strong></td>
                            <td>66,67%</td>
                            <td><strong>EV/EBIT:</strong></td>
                            <td>2,71</td>
                            <td><strong>Div Br/Patrim:</strong></td>
                            <td>0,37</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong>Cres. Rec(5a):</strong></td>
                            <td>27,9%</td>
                            <td><strong>Giro Ativos:</strong></td>
                            <td>0,64</td>
                        </tr>   
                    </table>
            
                    <br />
            
                    <table className="balanco-patrimonial">   
                        <tr>
                            <th colspan="4">Dados Balanço Patrimonial</th>
                        </tr>
                        <tr>
                            <td><strong>Ativo:</strong></td>
                            <td>441.316.000.000</td>
                            <td><strong>Dív. Bruta:</strong></td>
                            <td>66.403.000.000</td>
                            </tr>
                        <tr>
                            <td><strong>Disponibilidades:</strong></td>
                            <td>43.135.000.000</td>
                                <td><strong>Dív. Líquida:</strong></td>
                            <td>23.268.000.000</td>
                        </tr>
                        <tr>
                            <td><strong>Ativo Circulante:</strong></td>
                            <td>92.219.000.000</td>
                            <td><strong>Patrim. Líq:</strong></td>
                            <td>178.314.000.000</td>
                        </tr>      
                    </table>
            
                    <br />
            
                    <table className="demonstrativos-resultados">
                        <tr>
                            <th colspan="4">Dados demonstrativos de resultados</th>
                        </tr>
                        <tr>
                            <th colspan="2">Últimos 12 meses</th>
                            <th colspan="2">Últimos 3 meses</th>
                        </tr>
                        <tr>
                            <td><strong>Receita Líquida:</strong></td>
                            <td>280.942.000.000</td>
                            <td><strong>Receita Líquida:</strong></td>
                            <td>56.719.000.000</td>
                        </tr>
                        <tr>
                            <td><strong>EBIT:</strong></td>
                            <td>162.245.000.000</td>
                            <td><strong>EBIT:</strong></td>
                            <td>31.916.000.000</td>
                        </tr>
                        <tr>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>113.710.000.000</td>
                            <td><strong>Lucro Líquido:</strong></td>
                            <td>23.046.000.000</td>
                        </tr>  
                    </table>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default IndicadoresVisitante