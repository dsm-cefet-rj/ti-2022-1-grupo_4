import React from 'react'
import ImagemPerfil from '../../media/businessman.jpg'
import ImagemThumb from '../../media/chicago.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/slices/AuthenticationSlice'
import { toast } from 'react-toastify'
import styles from './HeaderPerfil.module.scss'

/**
 * @module componentes/HeaderPerfil
 */

const perfil = {
    nome: 'John Galt',
    status: 'Executivo de Marketing',
    localidade: {
        estado: 'Rio de Janeiro',
        pais: 'Brasil'
    },
    descricao: 'Consultor de Marketing para grandes empresas dos segmentos de Mídia & Serviços, oferecendo também palestras, treinamentos sobre marketing e estratégia de negócios. Investidor há mais de 8 anos.'
}

function HeaderPerfil() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    return (
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
                                <a className={`nav-link ${styles.navLink}`} href="/perfil">Perfil</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className={`nav-link ${styles.navLink}`} href="/ativos">Lista de Ativos</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className={`nav-link ${styles.navLink}`} href="/carteira">Carteira</a>
                            </li>
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className={`nav-link ${styles.navLink}`} href="#footer">Contatos</a>
                            </li>
                            {
                                auth._id ? (<li className={`nav-item ${styles.navItem}`}>
                                                <a className={`nav-link ${styles.navLink}`} onClick={() => {
                                                    dispatch((logoutUser(null)))
                                                    toast.warning("Logged out!", { position: "bottom-left"})
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

            <div className={styles.perfil}>
                <div className={styles.thumbContainer} style={{backgroundImage:`url(${ImagemThumb})` }}>
                    <div className={styles.perfilImageContainer}>
                        <img className={styles.perfilImage} src={ImagemPerfil} alt="profile" />
                    </div>
                </div>
    
                <div className={styles.perfilName}>
                    <h2><strong>{perfil.nome}</strong></h2>
                </div>
            
                <div className={styles.perfilInfo}>
                    <p className="perfil-status"><strong>{perfil.status}</strong></p>
                    <p className={styles.perfilLocation}>{perfil.localidade.estado}, {perfil.localidade.pais}</p>
                </div>
            
                <div className={styles.perfilDescricao}>
                    <h3 className="descricao-title"><strong>Sobre</strong></h3>
                    <p>{perfil.descricao}</p>
                </div>
            </div>
            
        </section>
    );
}

export default HeaderPerfil;