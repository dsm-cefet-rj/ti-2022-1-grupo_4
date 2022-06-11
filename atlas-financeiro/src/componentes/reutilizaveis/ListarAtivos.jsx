import React from 'react';
import ativos from './Ativos';
import vale from '../media/vale.png';


function handleClickCotacoesDiarias() {
    alert('Cotações Diárias!');
    window.location.href="/detalhamento_cotacoes";
}

function handleClickIndicadores() {
    alert('Indicadores!');
    window.location.href="/detalhamento_indicadores";
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
                    {ativos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.informacoes_gerais.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img className='imagem-ativo' src={vale} alt='Vale'/>
                                </div>
                                <div className='col'>
                                    <div>
                                        Ticker: {ativo.informacoes_gerais.ticker}
                                    </div>
                                    <div>
                                        Tipo: {ativo.informacoes_gerais.tipo}
                                    </div>
                                    <div>
                                        Última Cotação: R$ {ativo.cotacoes[0].valor}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" className="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" className="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                    <div className='col'>
                                    <span><button type="button" className="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                    </div>
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