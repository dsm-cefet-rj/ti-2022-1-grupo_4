import React, { useState, useEffect } from 'react';
import vale from '../../media/vale.png'
import video from '../../media/earth.mp4';
import styles from './ListarAtivos.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../Popup/Popup';
import Footer from '../Footer/Footer';
import { alterarBusca, buscar, fetchAtivos } from '../../store/slices/AtivosSlice';
import { createAtivoCarteira } from '../../store/slices/CarteiraSlice';
import { logoutUser } from '../../store/slices/AuthenticationSlice';
import { Link } from 'react-router-dom';


function ListarAtivos() {
    const [buttonPopup, setButtonPopup] = useState(false)
    const [selectedData, setSelectedData] = useState();

    const ativoSlice = useSelector(state => state.ativos)
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    async function alteraString() {
        await Promise.resolve(dispatch(fetchAtivos()));
        dispatch(alterarBusca(document.getElementById('busca_ativo').value));
        dispatch(buscar());
    }

    function handleUpdateClick(selectedRec) {
        setSelectedData(selectedRec);
        setButtonPopup(true);
    };

    function resetar() {
        dispatch(fetchAtivos());
        document.getElementById('busca_ativo').value = '';
    }

    useEffect(() => {
        if(ativoSlice.status === "not_loaded") {
            dispatch(fetchAtivos());
        }
    }, [ativoSlice.status, dispatch])

    return (
        <>
            <section className={styles.darkSection}>
                <div className={styles.navbar} id="navbar">
                    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                        <a className={`navbar-brand ${styles.navbarBrand}`} href='/'>Atlas Financeiro</a>
                        <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" id="hamburger">
                            <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ms-auto">
                                <li className={`nav-item ${styles.navItem}`}>
                                    <a className={`nav-link ${styles.navLink}`} href="/ativos">Lista de Ativos</a>
                                </li>
                                <li className={`nav-item ${styles.navItem}`}>
                                    <a className={`nav-link ${styles.navLink}`} href="#footer">Contatos</a>
                                </li>
                                {
                                    auth._id ? (<li className={`nav-item ${styles.navItem}`}>
                                                <a className={`nav-link ${styles.navLink}`} onClick={() => {
                                                    dispatch((logoutUser(null)))
                                                }}>Log out</a>
                                            </li>) 
                                         :  (<>
                                                <li className={`nav-item ${styles.navItem}`}>
                                                    <a className={`nav-link ${styles.navLink}`} href="/login">Log in</a>
                                                </li>
                                                <li className={`nav-item ${styles.navItem}`}>
                                                    <a className={`nav-link ${styles.navLink}`} href="/sign-up">Sign Up</a>
                                                </li>
                                            </>) 
                                }
                            </ul>
                        </div>
                    </nav>
                </div>


                <div className={styles.title}>

                    <video muted loop autoPlay src={video}  />
    
                    <div className={styles.overlay}></div>

                    <div className={styles.titleContainer}>
                        <h1><strong>Bem-vindo ao Atlas Financeiro!</strong></h1>
                        <h3>Seu sistema online de informações financeiras</h3>
                        <h2><strong>Invista consciente</strong></h2>
                    </div>

                    <div className={styles.searchContainer}>
                        <div className={`container-fluid ${styles.containerFluid}`}>
                            <input id="busca_ativo" name='busca' onChange={alteraString} className={`form-control me-2 ${styles.searchInput}`} type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" />
                            <button type="button" onClick={resetar} className={`btn btn-danger ${styles.searchButton}`} style={{margin: '10px'}} >Limpar</button>
                        </div>
                    </div>

                </div>       
            </section>

            <section className={styles.lightSection}>
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
                                                    <Link to={`/detalhamento_cotacoes/${ativo.id}`} ><button type="button" className={`btn btn-success ${styles.buttonOutro}`} >Cotações Diárias</button></Link>
                                                </div>
                                                <div className='col'>
                                                <Link to={`/detalhamento_indicadores/${ativo.id}`} ><button type="button" className={`btn btn-success ${styles.buttonOutro}`} >Indicadores</button></Link>
                                                </div>
                                                <div className='col'>
                                                <span><button 
                                                        type="button" 
                                                        className={`btn btn-success ${styles.buttonOutro}`} 
                                                        onClick={() => handleUpdateClick(ativo)}
                                                        >Adicionar à Carteira</button></span>
                                                        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} dados={selectedData} />
                                                            
                                                        
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
            <Footer />
            </section>
        </>

    );
}

export default ListarAtivos;