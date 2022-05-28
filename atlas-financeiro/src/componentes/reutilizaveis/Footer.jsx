import React from 'react';

function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer id="footer">
            <div className='footer-container'>
                <div className='sobre-container'>
                    <h3 className='footer-title'><strong>Sobre o Atlas Financeiro</strong></h3>
                    <p className='sobre-description'>
                        O objetivo do Atlas Finaneceiro é permitir que o usuário encontre informações diversas 
                        relacionadas ao mundo financeiro.
                    </p>
                </div>
                
                <div className='duvidas-container'>
                    <h3 className='footer-title'><strong>Dúvidas?</strong></h3>
                    <ul className='duvidas-list'>
                        <li><a href='#'>Contato</a></li>
                        <li><a href='#atlasfinanceirocontact@gmail.com'>Email</a></li>
                        <li className='footer-numero'>{"(21) 5551 6146"}</li>
                    </ul>
                </div>

                <div className='socialmedia-container'>
                    <h3 className='footer-title'><strong>Redes Sociais</strong></h3>
                    <ul className='socialmedia-list'>
                        <li className='facebook-icon'><i className="social-icon fab fa-facebook-f"></i> Facebook</li>
                        <li className='twitter-icon'><i className="social-icon fab fa-twitter"></i> Twitter</li>
                        <li className='instagram-icon'><i className="social-icon fab fa-instagram"></i> Instagram</li>
                    </ul>
                </div>
                
            </div>
            
            
            <p className='copyright'>Copyright © {ano} Atlas Financeiro</p>
            <p className='footer-terms'>Termos&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Privacidade&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Preferências</p>
        </footer>
    );
}

export default Footer;