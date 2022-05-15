import React from 'react';
import Header from './Header';
import { cotacoes } from './Cotacoes';
import Cotacoes from './Cotacoes';
import Indicadores from './Indicadores';
import Recomendacoes from './Recomendacoes';
import Footer from './Footer';
import './styles/detalhamento-styles.css'

function Detalhamento() {
    return (
        <>
            <Header />
            <section class="light-section">
                <Cotacoes />
                <Indicadores cotacoes={cotacoes}/>
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Detalhamento;