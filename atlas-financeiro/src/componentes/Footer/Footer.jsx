import React from 'react'
import styles from './Footer.module.scss'

/**
 * @module componentes/Footer
 */

function Footer() {
    const ano = new Date().getFullYear()

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footerContainer}>
                <div className={styles.sobreContainer}>
                    <h3 className={styles.footerTitle}><strong>Sobre o Atlas Financeiro</strong></h3>
                    <p className={styles.sobreDescription}>
                        O objetivo do Atlas Finaneceiro é permitir que o usuário encontre informações diversas 
                        relacionadas ao mundo financeiro.
                    </p>
                </div>
                
                <div className={styles.duvidasContainer}>
                    <h3 className={styles.footerTitle}><strong>Dúvidas?</strong></h3>
                    <ul className={styles.duvidasList}>
                        <li><a href='#'>Contato</a></li>
                        <li><a href='#atlasfinanceirocontact@gmail.com'>Email</a></li>
                        <li className={styles.footerNumero}>{"(21) 5551 6146"}</li>
                    </ul>
                </div>

                <div className={styles.socialmediaContainer}>
                    <h3 className={styles.footerTitle}><strong>Redes Sociais</strong></h3>
                    <ul className={styles.socialmediaList}>
                        <li className={styles.facebookIcon}><i className={`social-icon fab fa-facebook-f ${styles.svginlinefa.faw9}`}></i> Facebook</li>
                        <li className={styles.twitterIcon}><i className={`social-icon fab fa-twitter ${styles.svginlinefa.faw16}`}></i> Twitter</li>
                        <li className={styles.instagramIcon}><i className={`social-icon fab fa-instagram ${styles.svginlinefa.faw14}`}></i> Instagram</li>
                    </ul>
                </div>
                
            </div>
            
            
            <p className={styles.copyright}>Copyright © {ano} Atlas Financeiro</p>
            <p className={styles.footerTerms}>Termos&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Privacidade&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Preferências</p>
        </footer>
    )
}

export default Footer