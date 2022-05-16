import React from 'react';
import Header from './Header';
import Recomendacoes from './Recomendacoes';
import { cotacoes } from './Cotacoes'
import Footer from './Footer';

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