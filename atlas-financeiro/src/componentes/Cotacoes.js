import React from 'react';
import '../Cotacoes.css';

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
                            <li><a className="dropdown-item" href="#">Watchlist</a></li>
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
                        {props.cotacoes.map((cotacao) =>
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