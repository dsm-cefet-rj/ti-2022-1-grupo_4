import React from 'react';
import Header from './reutilizaveis/Header';
import Indicadores from './reutilizaveis/Indicadores';
import Recomendacoes from './reutilizaveis/Recomendacoes';
import Footer from './reutilizaveis/Footer';
import './styles/detalhamento-styles.css';

function DetalhamentoIndicadores() {
    return (
        <>
            <Header />
            <section className="light-section">
                <Indicadores />
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default DetalhamentoIndicadores;