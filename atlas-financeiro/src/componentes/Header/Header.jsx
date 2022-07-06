import React from 'react';
import video from '../../media/earth.mp4';
import SearchAssets from '../SearchAssets/SearchAssets';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.scss';
import { logoutUser } from '../../store/slices/AuthenticationSlice';
import { toast } from 'react-toastify'

function Header(props) {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)

    return (
        <section className={styles.darkSection}>

            <div className={styles.navbar} id="navbar">
                <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
                    <a className={`navbar-brand ${styles.navbarBrand}`} href='/'>Atlas Financeiro</a>
                    <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" id="hamburger">
                        <span className={`navbar-toggler-icon ${styles.navbarTogglerIcon}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto">

                            {
                                auth._id ? (<li className={`nav-item ${styles.navItem}`}>
                                                <a className={`nav-link ${styles.navLink}`} href={`/carteira/${auth._id}`}>Perfil</a>
                                            </li>) 
                                         :  null
                            }
                            <li className={`nav-item ${styles.navItem}`}>
                                <a className={`nav-link ${styles.navLink}`} href="#recomendacoes">Populares</a>
                            </li>
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


            <div className={styles.title}>

                <video muted loop autoPlay src={video}  />
                
                <div className={styles.overlay}></div>

                <div className={styles.titleContainer}>
                    <h1><strong>Bem-vindo ao Atlas Financeiro!</strong></h1>
                    <h3>Seu sistema online de informações financeiras</h3>
                    <h2><strong>Invista consciente</strong></h2>
                </div>

                <SearchAssets state={props.state} setState={props.setState} />

            </div>       
        </section>
    );
}

export default Header;