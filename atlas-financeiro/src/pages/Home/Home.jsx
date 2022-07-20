import React from 'react'
import styles from './Home.module.scss'
import Header from '../../componentes/Header/Header'
import IndicadoresVisitante from '../../componentes/IndicadoresVisitante/IndicadoresVisitante'
import Recomendacoes from '../../componentes/Recomendacoes/Recomendacoes'
import Footer from '../../componentes/Footer/Footer'

function Home(props) {

    return (
        <>
            <Header state={props.state} setState={props.setState} ticker={props.ticker} setTicker={props.setTicker}/>
            <section className={styles.lightSection}>    
                <div>
                    {props.state.visible ? <><IndicadoresVisitante state={props.state} setState={props.setState}  ticker={props.ticker} setTicker={props.setTicker}/></> : null }
                </div>
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Home;