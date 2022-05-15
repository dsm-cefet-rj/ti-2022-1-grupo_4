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
  
  function TabelaCotacoes() {
    return(
        <>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingCotacoesTwo">
                <button title="Petrobras" className="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCotacoesTwo" aria-expanded="false" aria-controls="collapseCotacoesTwo">
                    <strong>PETR4</strong>
                </button>
            </h2>
            <div id="collapseCotacoesTwo" className="accordion-collapse collapse" aria-labelledby="headingCotacoesTwo" data-bs-parent="#accordionCotacoes">
                <div className="accordion-body">
                    <div className="table-header">
                        <h3><strong>Cotações</strong></h3>
                        <div className="btn-group dropstart">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">                            
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="cotacao-diaria.html">Cotação Diária</a></li>
                            <li><a className="dropdown-item" href="perfil.html">Adicionar à Carteira</a></li>
                            <li><a className="dropdown-item" href="cotacao-diaria.html">Watchlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <table className="info-geral">
                        <thead>
                            <tr>
                                <td><strong>Papel:</strong></td>
                                <td>Petrobras (PETR4)</td>
                            </tr>
                        </thead>
                    </table>
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
                        {cotacoes.map((cotacao) =>
                            <LinhaTabela key={cotacao.data} cotacao={cotacao} />
                            )}
                        </tbody>
                    </table>
                    <div className="ler-mais"><a href="detalhamento.html">Ler mais</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  }
  
  export default TabelaCotacoes;
  export  {cotacoes};