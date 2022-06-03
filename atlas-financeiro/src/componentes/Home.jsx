import React from 'react';
import Header from './reutilizaveis/Header';
import Cotacoes from './reutilizaveis/Cotacoes';
import Indicadores from './reutilizaveis/Indicadores';
import Recomendacoes from './reutilizaveis/Recomendacoes';
import './styles/styles.css';
import Footer from './reutilizaveis/Footer';

function Home(props) {

    return (
        <>
            <Header state={props.state} setState={props.setState}/>
            <section className="light-section">    
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