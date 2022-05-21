import React from 'react';
import Header from './reutilizaveis/Header';
import { cotacoes } from './reutilizaveis/Cotacoes';
import { indicadores } from './reutilizaveis/Indicadores';
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
                <Cotacoes indicadores={indicadores}/>
                <Indicadores cotacoes={cotacoes}/>
                <Recomendacoes cotacoes={cotacoes}/>
                <Footer />
            </section>
        </>
    );
}

export default Detalhamento;