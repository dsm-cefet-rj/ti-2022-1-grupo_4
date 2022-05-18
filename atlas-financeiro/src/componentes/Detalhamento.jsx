import React from 'react';
import Header from './Header';
import { cotacoes } from './Cotacoes';
import { indicadores } from './Indicadores';
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
                <Cotacoes indicadores={indicadores}/>
                <Indicadores cotacoes={cotacoes}/>
                <Recomendacoes cotacoes={cotacoes}/>
                <Footer />
            </section>
        </>
    );
}

export default Detalhamento;