import React from 'react';
import Header from '../../componentes/Header/Header';
import Cotacoes from '../../componentes/Cotacoes/Cotacoes';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';
import styles from './Detalhamento.module.scss';

function DetalhamentoCotacoes() {
    return (
        <>
            <Header />
            <section className={styles.lightSection}>
                <Cotacoes />
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default DetalhamentoCotacoes;