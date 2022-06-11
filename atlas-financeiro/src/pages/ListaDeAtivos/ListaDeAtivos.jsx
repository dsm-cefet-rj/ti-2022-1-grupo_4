import React from "react";
import Footer from '../../componentes/Footer/Footer';
import Header from "../../componentes/Header/Header";
import ListarAtivos from "../../componentes/ListarAtivos/ListarAtivos";
import styles from './ListaDeAtivos.module.scss';

function Ativos() {
    return (
        <>
            <Header />
            <div className="ativos-list">
                <section className={styles.lightSection}>
                    <ListarAtivos />
                    <Footer />
                </section>
            </div>
        </>
    );

}


export default Ativos;