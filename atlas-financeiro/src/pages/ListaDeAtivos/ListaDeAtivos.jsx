import React from "react";
import Footer from '../../componentes/Footer/Footer';
import HeaderListaAtivo from "../../componentes/HeaderListaAtivo/HeaderListaAtivo";
import ListarAtivos from "../../componentes/ListarAtivos/ListarAtivos";
import styles from './ListaDeAtivos.module.scss';

function Ativos() {
    return (
        <>
            <HeaderListaAtivo />
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