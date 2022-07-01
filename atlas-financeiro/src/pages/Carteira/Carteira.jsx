import { React, useState, useEffect } from 'react';
import styles from './Carteira.module.scss';
import Watchlist from '../../componentes/Watchlist/Watchlist';
import Footer from '../../componentes/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import vale from '../../media/vale.png';
import { alterarId, deleteAtivoCarteira, deleteWatchlist, updateAtivoCarteira, fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';
import { alterarWatchlistId, fetchWatchlist } from '../../store/slices/WatchlistSlice';
import PopupCarteira from '../../componentes/Popup/PopupCarteira';
import { useParams, useHistory } from 'react-router-dom';
import ImagemPerfil from '../../media/businessman.jpg';
import ImagemThumb from '../../media/chicago.jpg';
import PopupWatchlist from '../../componentes/Popup/PopupWatchlist';


function Carteira() {
    
    let { user_id } = useParams();
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupWatchlist, setButtonPopupWatchlist] = useState(false)
    const [selectedData, setSelectedData] = useState();

    function handleUpdateClick(selectedRec) {
        setSelectedData(selectedRec);
        setButtonPopup(true);
    };

    function handleUpdateClickWatchlist(selectedRec) {
        setSelectedData(selectedRec);
        setButtonPopupWatchlist(true);
    };

    const carteira = useSelector(state => state.carteira);
    const watchlist = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    
    async function pegaCarteira() {
        await Promise.resolve(dispatch(alterarId(user_id)));
        await Promise.resolve(dispatch(fetchAtivosCarteira({ user_id })));
    }

    async function pegaWatchlist() {
        await Promise.resolve(dispatch(alterarWatchlistId(user_id)));
        await Promise.resolve(dispatch(fetchWatchlist({ user_id })));
    }
    
    useEffect(() => {
        if(carteira.status === "not_loaded") {
            pegaCarteira();
        }
    }, [carteira.status, dispatch])

    useEffect(() => {
        if(watchlist.status === "not_loaded") {
            pegaWatchlist();
        }
    }, [watchlist.status, dispatch])
    
    async function removerAtivoCarteira(ativo_id) {
        dispatch(deleteAtivoCarteira({ user_id, ativo_id }));
        alert('Ativo deletado com sucesso.');
        await Promise.resolve(dispatch(fetchAtivosCarteira({ user_id })));
    }

    async function removerWatchlist(watchlist_id) {
        dispatch(deleteWatchlist({ user_id, watchlist_id }))
        alert(`Watchlist deletada com sucesso.${watchlist_id}`)
        await Promise.resolve(dispatch(fetchAtivosCarteira({ user_id })))
    }
    
    if(typeof carteira.carteira[0] !== 'undefined' && carteira.carteira.length !== 0) {
        return (
            <>
                <section className={styles.darkSection}>
                    <div className={styles.navbar} id="navbar">
                        <nav className="navbar navbar-expand-lg  ">
                            <a className={`navbar-brand ${styles.navbarBrand}`} href='/'>Atlas Financeiro</a>
                            <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" id="hamburger">
                                <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ms-auto">
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.navLink}`} href={`/carteira/${user_id}`}>Perfil</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.navLink}`} href="/ativos">Lista de Ativos</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.navLink}`} href="#footer">Contatos</a>
                                    </li>
                                    <li className={`nav-item ${styles.navItem}`}>
                                        <a className={`nav-link ${styles.navLink}`} href="/login">Log out</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className={styles.perfil}>
                        <div className={styles.thumbContainer} style={{backgroundImage:`url(${ImagemThumb})` }}>
                            <div className={styles.perfilImageContainer}>
                                <img className={styles.perfilImage} src={ImagemPerfil} alt="profile" />
                            </div>
                        </div>
                        <div className={styles.perfilName}>
                            <h2><strong>{carteira.usuario.nome}</strong></h2>
                        </div>
                        <div className={styles.perfilInfo}>
                            <p className="perfil-status"><strong>{carteira.usuario.status}</strong></p>
                            <p className={styles.perfilLocation}>{carteira.usuario.localidade.estado}, {carteira.usuario.localidade.país}</p>
                        </div>
                        <div className={styles.perfilDescricao}>
                            <h3 className="descricao-title"><strong>Sobre</strong></h3>
                            <p>{carteira.usuario.descricao}</p>
                        </div>
                    </div>
                </section>

                <section className={styles.lightSection}>
                        
                        <div id="carteira-container">
                            <div className={styles.carteiraTitle}>
                                <h3><strong>{`Carteira`}</strong></h3>
                            </div>
                    
                            <div className={styles.carteiraContainer}>
                                {carteira.carteira.map(ativo => {
                                    return(
                                    <div className={styles.ativosCarteira}>
                                        <div className={styles.ativoCarteira}>
                                            <h3><strong>{ativo.empresa} ({ativo.ticker})</strong></h3>
                                        </div>
                                        
                                        <div style={{margin: '10px', padding: '10px', border: '10px'}}>
                                            <div className='box flexRow'>
                                                <div key={ativo.ticker} className='row'>
                                                    <div id="COLOCAR_IMAGEM" className={`col ${styles.ativoImagemCarteira}`}>
                                                        <img className={styles.imagemAtivo} src={vale} alt='Vale'/>
                                                    </div>
                                                    <div className={`col ${styles.ativoValueCarteira}`}>
                                                        <div>
                                                            Quantidade: {ativo.quantidade}
                                                        </div>
                                                        <div>
                                                            Preço Médio: R$ {ativo.preco_medio}
                                                        </div>
                                                        <div>
                                                            Rendimento: {ativo.rendimento * 100.00} %
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col' style={{'align-self': 'center'}}>
                                                            <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href={`/detalhamento_cotacoes/${ativo.ativo_id}`} >Cotações Diárias</a></button>
                                                        </div>
                                                        <div className='col' style={{'align-self': 'center'}}>
                                                            <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href={`/detalhamento_indicadores/${ativo.ativo_id}`} >Indicadores</a></button>
                                                        </div>
                                                        <div className='col' style={{'align-self': 'center'}}>
                                                            <button type="button" className={`btn btn-danger ${styles.buttonCancel}`} onClick={() => removerAtivoCarteira(ativo.ativo_id)} >Remover da Carteira</button>
                                                        </div>
                                                        <div className='col' style={{'align-self': 'center'}}>
                                                            <button type="button" className={`btn btn-success ${styles.buttonOutro}`} onClick={() => handleUpdateClick(ativo)} ><a className={styles.hRef}>Atualizar Ativo</a></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                <PopupCarteira trigger={buttonPopup} setTrigger={setButtonPopup} dados={selectedData} user_id={parseInt(user_id)} />
                                <PopupWatchlist trigger={buttonPopupWatchlist} setTrigger={setButtonPopupWatchlist} dados={selectedData} user_id={parseInt(user_id)} />
                            </div>
                        </div>

                        <div id='watchlist-component'>
                    
                            <Watchlist user_id={parseInt(user_id)} carteira={carteira}/>
                            <div className={styles.ativosWatchlist}>
                            <div className={styles.watchlistContainer}>
                                {carteira.watchlist.map(watchlist => {
                                    return(
                                        <div className={styles.userWatchlist}>
                                            <div>
                                                Ticker: {watchlist.ticker}
                                            </div>
                                            <div>
                                                Cotação: R$ {watchlist.cotacao}
                                            </div>
                                            <div className={styles.dropdownInfo}>
                                                Alerta: {converteDropdownWatchlist (watchlist.dropdown)}
                                            </div>
                                            <div className='row'>
                                                <div className='col' style={{'align-self': 'center'}}>
                                                    <button type="button" className={`btn btn-success ${styles.buttonOutro}`} onClick={() => handleUpdateClickWatchlist(watchlist)} ><a className={styles.hRef}>Atualizar</a></button>
                                                </div>
                                                <div className='col' style={{'align-self': 'center'}}>
                                                    <button type="button" className={`btn btn-danger ${styles.buttonCancel}`} onClick={() => removerWatchlist(watchlist.watchlist_id)} >Remover</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                        <Footer />
                </section>
            </>
        );
    }
}

function converteDropdownWatchlist (watchlist) {
    if (watchlist == "1")
        return "Abaixo da Cotação"
    else if ((watchlist == "0"))
        return "Acima da Cotação"
    else
    return "Null"
}

export default Carteira;