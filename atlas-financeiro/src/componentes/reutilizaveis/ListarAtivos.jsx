import React from 'react';
import { Ativo, GrupoAtivos } from './Ativo';
import css from '../styles/styles.css';
import vale from '../media/vale.png'


function handleClickCotacoesDiarias() {
    alert('Cotações Diárias!');
}

function handleClickIndicadores() {
    alert('Indicadores!');
}

function handleClickAddCarteira() {
    alert('Adicionar à Carteira!');
}

function ListarAtivos() {
    return (
        <div className='lista-ativos-container'>
            <h3><strong>{'Lista de Ativos (B3)'}</strong></h3>
            <div className='lista-bens-industriais'>

                

                <h3><strong>Bens Industriais</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-consumo-ciclico'>
                <h3><strong>Consumo Cíclico</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-consumo-nao-ciclico'>
                <h3><strong>Consumo não Cíclico</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-financeiro'>
                <h3><strong>Financeiro</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-materiais-basicos'>
                <h3><strong>Materiais Básicos</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-outros'>
                <h3><strong>Outros</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-petroleo-gas-biocombustiveis'>
                <h3><strong>Petróleo, Gás e Biocombustíveis</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-saude'>
                <h3><strong>Saúde</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-tecnologia-informacao'>
                <h3><strong>Tecnologia da Informação</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-telecomunicações'>
                <h3><strong>Telecomunicações</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className='lista-utilidade-publica'>
                <h3><strong>Utilidade Pública</strong></h3>
                <div>
                    {GrupoAtivos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.InfoGeral.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.InfoGeral.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.InfoGeral.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.Cotacoes.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                </div>
                                <div className='col'>
                                    <span><button type="button" class="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default ListarAtivos;