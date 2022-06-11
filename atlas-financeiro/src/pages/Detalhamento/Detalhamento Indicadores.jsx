import React from 'react';
import Header from '../../componentes/Header/Header';
import Indicadores from '../../componentes/Indicadores/Indicadores';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';
import styles from './Detalhamento.module.scss';

function DetalhamentoIndicadores() {
    return (
        <>
            <Header />
            <section className={styles.lightSection}>
                <Indicadores />
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default DetalhamentoIndicadores;