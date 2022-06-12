import React from 'react';
import ativos from '../reutilizaveis/Ativos';
import vale from '../../media/vale.png'
import styles from './ListarAtivos.module.scss';

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
        <div className={styles.listaAtivosContainer}>
            <h3><strong>{'Lista de Ativos (B3)'}</strong></h3>
        
            <div className={styles.listaBensIndustriais}>

                <h3><strong>Bens Industriais</strong></h3>
                <div className={styles.listarContainer}>
                    {ativos.map(ativo => {
                        return(
                        <div className='box flexRow'>
                            <div key={ativo.informacoes_gerais.ticker} className='row'>
                                <div id="COLOCAR_IMAGEM" className='col'>
                                    <img className={styles.imagemAtivo} src={vale} alt='Vale'/>
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
                                        <button type="button" className={`btn btn-success ${styles.teste}`} onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                    </div>
                                    <div className='col'>
                                        <button type="button" className={`btn btn-success ${styles.teste}`} onClick={handleClickIndicadores}>Indicadores</button>
                                    </div>
                                    <div className='col'>
                                    <span><button type="button" className={`btn btn-success ${styles.teste}`} onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles.listaConsumoCiclico}>
                <h3><strong>Consumo Cíclico</strong></h3>
            </div>
            <div className={styles.listaConsumoNaoCiclico}>
                <h3><strong>Consumo não Cíclico</strong></h3>
            </div>
            <div className={styles.listaFinanceiro}>
                <h3><strong>Financeiro</strong></h3>
            </div>
            <div className={styles.listaMateriaisBasicos}>
                <h3><strong>Materiais Básicos</strong></h3>
            </div>
            <div className={styles.listaOutros}>
                <h3><strong>Outros</strong></h3>
            </div>
            <div className={styles.listaPetroleoGasBiocombustiveis}>
                <h3><strong>Petróleo, Gás e Biocombustíveis</strong></h3>
            </div>
            <div className={styles.listaSaude}>
                <h3><strong>Saúde</strong></h3>
            </div>
            <div className={styles.listaTecnologiaInformacao}>
                <h3><strong>Tecnologia da Informação</strong></h3>
            </div>
            <div className={styles.listaTelecomunicações}>
                <h3><strong>Telecomunicações</strong></h3>
            </div>
            <div className={styles.listaUtilidadePublica}>
                <h3><strong>Utilidade Pública</strong></h3>
            </div>

        </div>
    );
}

export default ListarAtivos;