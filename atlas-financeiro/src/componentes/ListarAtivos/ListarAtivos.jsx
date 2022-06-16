import React, { useState, useEffect } from 'react';
import vale from '../../media/vale.png'
import styles from './ListarAtivos.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAtivos } from '../../store/slices/AtivosSlice';
import Popup from '../Popup/Popup';
import { alterarBusca, buscar } from '../../store/slices/AtivosSlice';


function handleClickCotacoesDiarias() {
    alert('Cotações Diárias!');
    window.location.href="/detalhamento_cotacoes";
}

function handleClickIndicadores() {
    alert('Indicadores!');
    window.location.href="/detalhamento_indicadores";
}

function ListarAtivos() {
    const [buttonPopup, setButtonPopup] = useState(false)

    // const busca = useSelector(state => state.busca)
    
    const ativoSlice = useSelector(state => state.ativos)
    // const listaAtivos = useSelector(state => state.ativos.ativos)
    // const busca = useSelector(state => state.ativos.busca)
    // const status = useSelector(state => state.ativos.status)
    const dispatch = useDispatch()
    
    
    // const string_busca = useSelector(state => state.ativos.busca);
    
    function alteraString() {
        // dispatch(alterarBusca(document.getElementById('busca_ativo').value));
        // alert(document.getElementById('busca_ativo').value);
        dispatch(alterarBusca(document.getElementById('busca_ativo').value));
    }
    
    function mostrarDetalhamento() {
        dispatch(buscar());
    }

    function resetar() {
        dispatch(fetchAtivos());
    }

    useEffect(() => {
        if(ativoSlice.status === "not_loaded") {
            debugger
            dispatch(fetchAtivos());
        }
    }, [ativoSlice.status, dispatch])

    // console.log(ativoSlice);
    // console.log(busca);
    // console.log(status);
    // debugger

    console.log('--------------------------------------')
    console.log(ativoSlice)
    debugger
    console.log('--------------------------------------')

    return (
        <>
            <div className={styles.searchContainer}>
                <div className={`container-fluid ${styles.containerFluid}`}>
                    <input id="busca_ativo" name='busca' onChange={alteraString} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" />
                    <button type="button" onClick={mostrarDetalhamento} className={`btn btn-primary ${styles.buttonSearch}`} >Buscar</button>
                    <button type="button" onClick={resetar} className="btn btn-danger" >Limpar Busca</button>
                </div>
            </div>

            <div className={styles.listaAtivosContainer}>
                <div className={styles.listaAtivoTitle}>
                    <h3><strong>{'Lista de Ativos (B3)'}</strong></h3>
                </div>
            
                    <div className={styles.listarContainer}>
                        {ativoSlice.ativos.length == 0? [] : ativoSlice.ativos.map(ativo => {
                            return(
                            <div className={styles.listaBensIndustriais}>

                                <h3><strong>{ativo.informacoes_gerais.setor} - {ativo.informacoes_gerais.subsetor}</strong></h3>
                                <div style={{margin: '10px', padding: '10px', border: '10px'}}>
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
                                            <div className={`row ${styles.opcoesContainer}`}>
                                                <div className='col'>
                                                    <button type="button" className={`btn btn-success ${styles.buttonOutro}`} onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                                                </div>
                                                <div className='col'>
                                                    <button type="button" className={`btn btn-success ${styles.buttonOutro}`} onClick={handleClickIndicadores}>Indicadores</button>
                                                </div>
                                                <div className='col'>
                                                <span><button 
                                                        type="button" 
                                                        className={`btn btn-success ${styles.buttonOutro}`} 
                                                        onClick={() => setButtonPopup(true)}
                                                        >Adicionar à Carteira</button></span>
                                                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} empresa={ativo.informacoes_gerais.empresa} ticker={ativo.informacoes_gerais.ticker}/>
                                                            
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                </div>

            </div>
        </>

    );
}

export default ListarAtivos;