import React from 'react';
import ImagemPerfil from '../media/businessman.jpg';
import ImagemThumb from '../media/chicago.jpg';

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
    return (
        <section class="dark-section">

            <div id="navbar">

                <nav class="navbar navbar-expand-lg  ">

                    <a class="navbar-brand" href='/'>Atlas Financeiro</a>

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
                                <a class="nav-link" href="/ativos">Lista de Ativos</a>
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
                    <h2><strong>{perfil.nome}</strong></h2>
                </div>
            
                <div class="perfil-info">
                    <p class="perfil-status"><strong>{perfil.status}</strong></p>
                    <p class="perfil-location">{perfil.localidade.estado},&nbsp;&nbsp;&nbsp;&nbsp; {perfil.localidade.pais}</p>
                </div>
            
                <div class="perfil-descricao">
                    <h3 class="descricao-title"><strong>Sobre</strong></h3>
                    <p>{perfil.descricao}</p>
                </div>
            
          
            </div>
        </section>
    );
}

export default HeaderPerfil;