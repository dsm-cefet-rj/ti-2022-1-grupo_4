import React from 'react';
import Header from '../../componentes/Header/Header';
import Cotacoes from '../../componentes/Cotacoes/Cotacoes';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';

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