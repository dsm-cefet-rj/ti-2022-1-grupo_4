import React from 'react';
import styles from './Home.module.scss';
import Header from '../../componentes/Header/Header';
import Cotacoes from '../../componentes/Cotacoes/Cotacoes';
import Indicadores from '../../componentes/Indicadores/Indicadores';
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes';
import Footer from '../../componentes/Footer/Footer';

function Home(props) {

    return (
        <>
            <Header state={props.state} setState={props.setState}/>
            <section className={styles.lightSection}>    
                <div>
                    {props.state.visible ? <><Cotacoes /><Indicadores /></> : null}
                </div>
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Home;