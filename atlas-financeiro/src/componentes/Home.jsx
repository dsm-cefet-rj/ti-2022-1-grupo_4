import React from 'react';
import Header from './reutilizaveis/Header';
import Recomendacoes from './reutilizaveis/Recomendacoes';
import { cotacoes } from './reutilizaveis/Cotacoes'
import './styles/styles.css';
import Footer from './reutilizaveis/Footer';

function Home() {
    return (
        <>
            <Header />
            <section class="light-section">
                <Recomendacoes cotacoes={cotacoes}/>
                <Footer />
            </section>
        </>
    );
}

export default Home;