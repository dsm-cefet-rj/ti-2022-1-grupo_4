import React from 'react';
import { Ativo } from './Ativo';

function Carteira() {
    return (
        <div id="carteira-container">
            <div class="carteira">
                <h2><strong>Carteira de Ativos</strong></h2>
            </div>
            <div class="search-container">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </div>
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
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                      
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                              
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                              
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                              
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                              
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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
                                    <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                  </ul>
                              </div>
                          </div>
                          <table class="info-geral"> 
                              
                          <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{Ativo.InfoGeral.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{Ativo.Cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{Ativo.InfoGeral.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{Ativo.Cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{Ativo.InfoGeral.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{Ativo.InfoGeral.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{Ativo.InfoGeral.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{Ativo.InfoGeral.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(Ativo.InfoGeral.vol_medio_2m)}</td>
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

export default Carteira;