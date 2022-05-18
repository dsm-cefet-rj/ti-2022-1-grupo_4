import React from 'react';
import './styles/styles.css';
import video from './media/earth.mp4';

function Header() {
    return (
        <section class="dark-section">

            <div id="navbar">
                <nav class="navbar navbar-expand-lg  ">
                    <a class="navbar-brand">Atlas Financeiro</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" id="hamburger">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                                <a class="nav-link" href="Ativos">Lista de Ativos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#recomendacoes">Recomendações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Contatos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/perfil">Log in</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


            <div id="title">

                <video muted loop autoPlay src={video}  />
                
                <div class="overlay"></div>

                <div class="title-container">
                    <h1><strong>Bem-vindo ao Atlas Financeiro!</strong></h1>
                    <h3>Seu sistema online de informações financeiras</h3>
                    <h2><strong>Invista consciente</strong></h2>
                </div>

                <div class="search-container">
                    <div class="container-fluid">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search"  />
                            <button class="btn btn-outline-light" type="submit" > <a class="button-submit" href="/detalhamento">Buscar</a></button>
                        </form>
                    </div>
                </div>
            
            </div>       
        </section>
    );
}

export default Header;