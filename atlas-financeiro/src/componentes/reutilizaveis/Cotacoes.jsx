import React from 'react';
import { Ativo } from './Ativo'; 

const cotacoes = Ativo.Cotacoes;

const LinhaTabela = (props) => {
    return(
          <tr>
            <td> {props.cotacao.data} </td>
            <td> {props.cotacao.valor} </td>
          </tr>
    );
  }
  
  function TabelaCotacoes() {
    return(
        <div id='cotacao-diaria-container'>
            <div className="table-title">
                <h2><strong>{Ativo.Indicadores.ticker}</strong></h2>
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
                {cotacoes.map((cotacoes) => 
                    <LinhaTabela key={cotacoes.data} cotacao={cotacoes} />
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
  }
  
  export default TabelaCotacoes;
  export  {cotacoes};