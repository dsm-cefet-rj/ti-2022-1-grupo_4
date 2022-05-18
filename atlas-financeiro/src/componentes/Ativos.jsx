import React from "react";
import Footer from './Footer';
import Header from "./Header";
import ListaAtivos from "./ListaAtivos";



function Ativos() {
    return (
        <>
            <Header />
            <div className="ativos-list">
            <section className="light-section">
                <ListaAtivos />
                <Footer />
            </section>

        </div>
        </>

    );

}


export default Ativos;