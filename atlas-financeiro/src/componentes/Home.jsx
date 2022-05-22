import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <section class="light-section">
                <TransitionGroup>
                    <CSSTransition key={props.setState} timeout={1000} classNames="messageout">
                        <div>
                            {props.state.visible ? <><Cotacoes /><Indicadores /></> : null}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <Recomendacoes />
                <Footer />
            </section>
        </>
    );
}

export default Home;