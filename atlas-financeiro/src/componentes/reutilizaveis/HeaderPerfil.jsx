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
                                <a className="nav-link" href="/perfil">Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#recomendacoes">Recomendações</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/ativos">Lista de Ativos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/carteira-perfil">Carteira</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#historico-container">Histórico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contatos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log out</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

            <div className="perfil">
                <div className="thumb-container" style={{backgroundImage:`url(${ImagemThumb})` }}>
                    <div className="perfil-image-container">
                        <img className="perfil-image" src={ImagemPerfil} alt="profile" />
                    </div>
                </div>
    
                <div className="perfil-name">
                    <h2><strong>{perfil.nome}</strong></h2>
                </div>
            
                <div className="perfil-info">
                    <p className="perfil-status"><strong>{perfil.status}</strong></p>
                    <p className="perfil-location">{perfil.localidade.estado}, {perfil.localidade.pais}</p>
                </div>
            
                <div className="perfil-descricao">
                    <h3 className="descricao-title"><strong>Sobre</strong></h3>
                    <p>{perfil.descricao}</p>
                </div>
            
          
            </div>
        </section>
    );
}

export default HeaderPerfil;