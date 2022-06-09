import React from 'react';
import '../styles/styles.css';
import video from '../media/earth.mp4';
import SearchAssets from './SearchAssets';

function Header(props) {
    
    return (
        <section className="dark-section">

            <div id="navbar">
                <nav className="navbar navbar-expand-lg  ">
                    <a className="navbar-brand" href='/'>Atlas Financeiro</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" id="hamburger">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto">
                        
                            <li className="nav-item">
                                <a className="nav-link" href="#recomendacoes">Recomendações</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ativos">Lista de Ativos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contatos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log in</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


            <div id="title">

                <video muted loop autoPlay src={video}  />
                
                <div className="overlay"></div>

                <div className="title-container">
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