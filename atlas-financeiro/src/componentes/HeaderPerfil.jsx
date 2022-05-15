import React from 'react';
import ImagemPerfil from './media/businessman.jpg';
import ImagemThumb from './media/chicago.jpg';

function HeaderPerfil() {
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
                                <a class="nav-link" href="/perfil">Perfil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#recomendacoes">Recomendações</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#carteira-container">Carteira</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#historico-container">Histórico</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Contatos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Log out</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

            <div class="perfil">
                <div class="thumb-container" style={{backgroundImage:`url(${ImagemThumb})` }}>
                    <div class="perfil-image-container">
                        <img class="perfil-image" src={ImagemPerfil} alt="profile" />
                    </div>
                </div>
    
                <div class="perfil-name">
                    <h2><strong>John Galt</strong></h2>
                </div>
            
                <div class="perfil-info">
                    <p class="perfil-status"><strong>Executivo de Marketing</strong></p>
                    <p class="perfil-location">Rio de Janeiro,&nbsp;&nbsp;&nbsp;&nbsp; Brazil</p>
                </div>
            
                <div class="perfil-descricao">
                    <h3 class="descricao-title"><strong>Sobre</strong></h3>
                    <p>Consultor de Marketing para grandes empresas dos segmentos de Mídia & Serviços, oferecendo também palestras, treinamentos sobre marketing e estratégia de negócios. Investidor a mais de 8 anos.</p>
                </div>
            
          
            </div>
        </section>
    );
}

export default HeaderPerfil;