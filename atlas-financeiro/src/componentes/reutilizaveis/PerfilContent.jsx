import React from 'react';
import Carteira from './Carteira';
import Watchlist from './Watchlist';
import Historico from './Historico';
import Recomendacoes from './Recomendacoes';
import { recomendacoes } from './Recomendacoes';
import { cotacoes } from './Cotacoes'
import Footer from './Footer';

function PerfilContent() {
    return (
        <section class="light-section">
                <Watchlist />
                <Carteira />
                <Historico recomendacoes={recomendacoes} cotacoes={cotacoes}/>
                <Recomendacoes cotacoes={cotacoes}/>
                <Footer />
        </section>
    );
}

export default PerfilContent;