import React from 'react';
import '../styles/styles.css';

const recomendacoes = {
    empresa: 'Vale',
    ticker: 'VALE3',
    tipo: 'ON NM',
    max_52: 102.32,
    min_52: 60.02,
    setor: 'Mineração',
    subsetor: 'Minerais Metálicos',
    vol_medio_2m: 2968530000,
}

function Recomendacoes(props) {
    return (
      <div id="recomendacoes">
        <div class="table-title">
          <h2><strong>Recomendações</strong></h2>
        </div>
                
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          [VALE3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VALE ON
                        </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                        </div>
                      </div>
          </div>
          <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          [INGA4L]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inga Agroflorestal
                        </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                        </div>
                      </div>
          </div>
          <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          [KLBN3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KLABIN ON
                        </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                        </div>
                      </div>
          </div>
          <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            [ITSA3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITAUSA ON
                          </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
          <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            [MGLU3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MAGAZINE LUIZA ON
                          </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
          <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            [JSLG3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JSL ON
                          </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
          <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSeven">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            [SQIA3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SINQIA ON
                          </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
          <div class="accordion-item">
                        <h2 class="accordion-header" id="headingEight">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            [PETR4]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PETROBRAS PN
                          </button>
                        </h2>
                        <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
          <div class="accordion-item">
          <h2 class="accordion-header" id="headingNine">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            [TOTS3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TOTVS ON
                          </button>
                        </h2>
                        <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
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
                                    <td>{recomendacoes.ticker}</td>
                                    <td><strong>Cotação:</strong></td>
                                    <td>{props.cotacoes[0].valor}</td>
                                </tr>
                                <tr>
                                    <td><strong>Tipo:</strong></td>
                                    <td>{recomendacoes.tipo}</td>
                                    <td><strong>Data útil cot:</strong></td>
                                    <td>{props.cotacoes[0].data}</td>
                                </tr>
                                <tr>
                                    <td><strong>Empresa:</strong></td>
                                    <td>{recomendacoes.empresa.toUpperCase()}</td>
                                    <td><strong>Min 52 sem:</strong></td>
                                    <td>{recomendacoes.min_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Setor:</strong></td>
                                    <td>{recomendacoes.setor}</td>
                                    <td><strong>Max 52 sem:</strong></td>
                                    <td>{recomendacoes.max_52}</td>
                                </tr>
                                <tr>
                                    <td><strong>Subsetor:</strong></td>
                                    <td>{recomendacoes.subsetor}</td>
                                    <td><strong>$ méd(2m):</strong></td>
                                    <td>{Intl.NumberFormat('pt-BR').format(recomendacoes.vol_medio_2m)}</td>
                                </tr>
                            </table>
                            <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                            
                          </div>
                        </div>
          </div>
        </div>
      </div>
    );
}

export default Recomendacoes;
export {recomendacoes};