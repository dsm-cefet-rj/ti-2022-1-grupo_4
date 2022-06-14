import React from 'react';
import Watchlist from '../../componentes/Watchlist/Watchlist';
import Historico from '../../componentes/Historico/Historico';
import Footer from '../../componentes/Footer/Footer';
import styles from './Perfil.module.scss';

function PerfilContent() {
    return (
        <section className={styles.lightSection}>
                <Watchlist />
                <Historico />
                <Footer />
        </section>
    );
}

export default PerfilContent;