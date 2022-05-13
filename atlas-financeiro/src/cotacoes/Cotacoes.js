import React from 'react';

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
      <table id="cotacoes" className="table table-striped">
        <thead>
            <tr>
                <th>
                    Cotações
                </th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Data:</strong></td>
            <td><strong>Cotação:</strong></td>
        </tr>
        {props.cotacoes.map((cotacao) =>
            <LinhaTabela key={cotacao.data} cotacao={cotacao} />
        )}
        </tbody>
      </table>
    );
  }
  
  export default TabelaCotacoes;