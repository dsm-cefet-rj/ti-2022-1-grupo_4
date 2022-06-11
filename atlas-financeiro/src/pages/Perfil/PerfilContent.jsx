import React from 'react';
import Carteira from '../Carteira/Carteira';
import Watchlist from '../../componentes/Watchlist/Watchlist';
import Historico from '../../componentes/Historico/Historico';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';
import styles from './Perfil.module.scss';

function PerfilContent() {
    return (
        <section className={styles.lightSection}>
                <Watchlist />
                <Carteira />
                <Historico />
                <Recomendacoes />
                <Footer />
        </section>
    );
}

export default PerfilContent;