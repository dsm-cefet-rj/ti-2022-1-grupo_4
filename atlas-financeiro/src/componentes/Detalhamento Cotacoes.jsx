import React from 'react';
import Header from './reutilizaveis/Header';
import Cotacoes from './reutilizaveis/Cotacoes';
import Recomendacoes from './reutilizaveis/Recomendacoes';
import Footer from './reutilizaveis/Footer';
import './styles/detalhamento-styles.css';

function DetalhamentoCotacoes() {
    return (
        <>
            <Header />
            <section className="light-section">
                <Cotacoes />
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default DetalhamentoCotacoes;