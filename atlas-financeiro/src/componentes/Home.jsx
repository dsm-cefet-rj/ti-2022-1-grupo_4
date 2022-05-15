import React from 'react';
import Header from './Header';
import Recomendacoes from './Recomendacoes';
import Footer from './Footer';

function Home() {
    return (
        <>
            <Header />
            <section class="light-section">
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Home;