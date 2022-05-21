import React from 'react';

const ativo = {
    empresa: 'Aeris',
    ticker: 'AERI3F',
    tipo: 'Bens Industriais',
    ultCotacao: 4.53
}

function ListarAtivos() {
    return (
        <div className='lista-ativos-container'>
            <h3><strong>{'Lista de Ativos (B3)'}</strong></h3>
            <div className='lista-bens-industriais'>
                <h3><strong>Bens Industriais</strong></h3>
                <table>
                    <tr>
                        <th>Empresa</th>
                        <th>Ativos</th>
                        <th>Última Cotação</th>
                    </tr>
                    <tr>
                        <td>{ativo.empresa}</td>
                        <td>{ativo.ticker}</td>
                        <td>R$ {ativo.ultCotacao}</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
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
                        <td>Aeris</td>
                        <td>AERI3F</td>
                        <td>R$ 4,53</td>
                    </tr>
                    <tr>
                        <td>Intercement</td>
                        <td>ICBR3</td>
                        <td>R$ 34,71</td>
                    </tr>
                    <tr>
                        <td>Dotz</td>
                        <td>DOTZ3F</td>
                        <td>R$ 25,25</td>
                    </tr>
                    <tr>
                        <td>Gol</td>
                        <td>GOLL3</td>
                        <td>R$ 108,44</td>
                    </tr>
                    <tr>
                        <td>VIA S.A</td>
                        <td>VIIA3F</td>
                        <td>R$ 80,11</td>
                    </tr>
                    <tr>
                        <td>Armac</td>
                        <td>ARML3</td>
                        <td>R$ 14,78</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default ListarAtivos;