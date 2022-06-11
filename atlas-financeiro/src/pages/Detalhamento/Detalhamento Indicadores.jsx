import React from 'react';
import Header from '../../componentes/Header/Header';
import Indicadores from '../../componentes/Indicadores/Indicadores';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';

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