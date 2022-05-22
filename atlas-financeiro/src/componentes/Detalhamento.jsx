import React from 'react';
import Header from './reutilizaveis/Header';
import Cotacoes from './reutilizaveis/Cotacoes';
import Indicadores from './reutilizaveis/Indicadores';
import Recomendacoes from './reutilizaveis/Recomendacoes';
import Footer from './reutilizaveis/Footer';
import './styles/detalhamento-styles.css';

function Detalhamento() {
    return (
        <>
            <Header />
            <section class="light-section">
                <Cotacoes />
                <Indicadores />
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Detalhamento;