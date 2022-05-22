import React from 'react';
import { Ativo, GrupoAtivos } from './Ativo';
import css from '../styles/styles.css';

function ListarAtivos() {
    return (
        <div className='lista-ativos-container'>
            <h3><strong>{'Lista de Ativos (B3)'}</strong></h3>
            <div className='lista-bens-industriais'>

                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker}>
                                <div id="COLOCAR_IMAGEM">

                                </div>
                                <div>
                                    Ticker: {ativo.InfoGeral.ticker}
                                </div>
                                <div>
                                    Tipo: {ativo.InfoGeral.tipo}
                                </div>
                                <div>
                                    Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste">Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste">Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste">Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <h3><strong>Bens Industriais</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-consumo-ciclico'>
                <h3><strong>Consumo Cíclico</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-consumo-nao-ciclico'>
                <h3><strong>Consumo não Cíclico</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-financeiro'>
                <h3><strong>Financeiro</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-materiais-basicos'>
                <h3><strong>Materiais Básicos</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-outros'>
                <h3><strong>Outros</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-petroleo-gas-biocombustiveis'>
                <h3><strong>Petróleo, Gás e Biocombustíveis</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-saude'>
                <h3><strong>Saúde</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-tecnologia-informacao'>
                <h3><strong>Tecnologia da Informação</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-telecomunicações'>
                <h3><strong>Telecomunicações</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

            <div className='lista-utilidade-publica'>
                <h3><strong>Utilidade Pública</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                    <tr>
                        <td>{Ativo.InfoGeral.empresa}</td>
                        <td>{Ativo.InfoGeral.ticker}</td>
                        <td>R$ {Ativo.Cotacoes.cotacoes[0].valor}</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default ListarAtivos;