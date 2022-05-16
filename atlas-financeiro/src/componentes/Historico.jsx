import React from 'react';


function Historico(props) {
    return (
        <div id="historico-container">
            <div class="historico">
                <h2><strong>Histórico de Pesquisa de Ativos</strong></h2>
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
                                  <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                </ul>
                            </div>
                        </div>
                        <table class="info-geral"> 
                            
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
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
                                  <li><a class="dropdown-item" href="#">Watchlist</a></li>
                                </ul>
                            </div>
                        </div>
                        <table class="info-geral"> 
                            
                        <tr>
                            <td><strong>Papel:</strong></td>
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
                        </tr>
                        </table>
                        <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                        
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTen">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        [ITUB4]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITAUUNIBANCO PN
                      </button>
                    </h2>
                    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
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
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
                        </tr>
                        </table>
                        <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                        
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEleven">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                        [BBDC4]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BRADESCO PN
                      </button>
                    </h2>
                    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample">
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
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
                        </tr>
                        </table>
                        <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                        
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwelve">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                        [ABEV3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AMBEV
                      </button>
                    </h2>
                    <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionExample">
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
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
                        </tr>
                        </table>
                        <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                        
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThirteen">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                        [BBAS3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BRASIL ON
                      </button>
                    </h2>
                    <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionExample">
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
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
                        </tr>
                        </table>
                        <div class="ler-mais"><a href="/detalhamento">Ler mais</a></div>
                        
                      </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFourteen">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                        [JBSS3]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JBS ON
                      </button>
                    </h2>
                    <div id="collapseFourteen" class="accordion-collapse collapse" aria-labelledby="headingFourteen" data-bs-parent="#accordionExample">
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
                            <td>{props.recomendacoes.ticker}</td>
                            <td><strong>Cotação:</strong></td>
                            <td>{props.cotacoes[0].valor}</td>
                        </tr>
                        <tr>
                            <td><strong>Tipo:</strong></td>
                            <td>{props.recomendacoes.tipo}</td>
                            <td><strong>Data útil cot:</strong></td>
                            <td>{props.cotacoes[0].data}</td>
                        </tr>
                        <tr>
                            <td><strong>Empresa:</strong></td>
                            <td>{props.recomendacoes.empresa.toUpperCase()}</td>
                            <td><strong>Min 52 sem:</strong></td>
                            <td>{props.recomendacoes.min_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Setor:</strong></td>
                            <td>{props.recomendacoes.setor}</td>
                            <td><strong>Max 52 sem:</strong></td>
                            <td>{props.recomendacoes.max_52}</td>
                        </tr>
                        <tr>
                            <td><strong>Subsetor:</strong></td>
                            <td>{props.recomendacoes.subsetor}</td>
                            <td><strong>$ méd(2m):</strong></td>
                            <td>{Intl.NumberFormat('pt-BR').format(props.recomendacoes.vol_medio_2m)}</td>
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

export default Historico;