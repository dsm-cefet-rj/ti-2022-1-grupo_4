import React from 'react';
import Carteira from './Carteira';
import Watchlist from './Watchlist';
import Historico from './Historico';
import Recomendacoes from './Recomendacoes';
import Footer from './Footer';

function PerfilContent() {
    return (
        <section class="light-section">
                <Watchlist />
                <Carteira />
                <Historico />
                <Recomendacoes />
                <Footer />
        </section>
    );
}

export default PerfilContent;