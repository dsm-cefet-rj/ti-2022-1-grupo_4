import React from 'react';

const cotacoes = [
    {data: '11/05/2022', valor: 78.6},
    {data: '10/05/2022', valor: 75.7},
    {data: '09/05/2022', valor: 76.51},
    {data: '08/05/2022', valor: 79.94},
    {data: '07/05/2022', valor: 80.41},
    {data: '06/05/2022', valor: 81.9},
    {data: '05/05/2022', valor: 82.7},
    {data: '04/05/2022', valor: 83.09},
    {data: '03/05/2022', valor: 82.95},
    {data: '02/05/2022', valor: 84.14},
    {data: '01/05/2022', valor: 82.28},
]

const LinhaTabela = (props) => {
    return(
          <tr>
            <td> {props.cotacao.data} </td>
            <td> {props.cotacao.valor} </td>
          </tr>
    );
  }
  
  function TabelaCotacoes(props) {
    return(
        <div id='cotacao-diaria-container'>
            <div className="table-title">
                <h2><strong>{props.indicadores.ticker}</strong></h2>
                <h3>Histórico de Cotação Diária</h3>
            </div>
        <div className='table-cotacao-container'>
            <table id="cotacoes" className="table table-striped">
                <tbody>
                <tr>
                    <td><strong>Papel:</strong></td>
                    <td><strong>{'Petrobras (PETR4)'}</strong></td>
                </tr>
                <tr>
                    <td><strong>Data:</strong></td>
                    <td><strong>Cotação:</strong></td>
                </tr>
                {cotacoes.map((cotacao) =>
                    <LinhaTabela key={cotacao.data} cotacao={cotacao} />
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
  }
  
  export default TabelaCotacoes;
  export  {cotacoes};