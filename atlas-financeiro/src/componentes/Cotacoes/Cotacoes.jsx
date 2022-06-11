import React from 'react';
import ativos from '../reutilizaveis/Ativos';
import styles from './Cotacoes.module.scss';

// Aqui só puxa de um ativos, que será buscado via fetch
const cotacoes = ativos[0].cotacoes;

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
                <h2><strong>{ativos[0].informacoes_gerais.ticker}</strong></h2>
                <h3>Histórico de Cotação Diária</h3>
            </div>
        <div className={styles.tableCotacaoContainer}>
            <table id="cotacoes" className="table table-striped">
                <tbody>
                <tr>
                    <td className={styles.cotacoesTd}><strong>Papel:</strong></td>
                    <td className={styles.cotacoesTd}><strong>{ativos[0].informacoes_gerais.empresa} ({ativos[0].informacoes_gerais.ticker})</strong></td>
                </tr>
                <tr>
                    <td className={styles.cotacoesTd}><strong>Data:</strong></td>
                    <td className={styles.cotacoesTd}><strong>Cotação:</strong></td>
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