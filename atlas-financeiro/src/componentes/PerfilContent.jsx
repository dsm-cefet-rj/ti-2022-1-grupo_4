import React from 'react';
import Carteira from './Carteira';
import Historico from './Historico';
import Recomendacoes from './Recomendacoes';
import Footer from './Footer';

function PerfilContent() {
    return (
        <section class="light-section">
                <Carteira />
                <Historico />
                <Recomendacoes />
                <Footer />
        </section>
    );
}

export default PerfilContent;