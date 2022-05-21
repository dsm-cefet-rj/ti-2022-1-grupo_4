import React from "react";
import Footer from './reutilizaveis/Footer';
import Header from "./reutilizaveis/Header";
import ListarAtivos from "./reutilizaveis/ListarAtivos";

function Ativos() {
    return (
        <>
            <Header />
            <div className="ativos-list">
            <section className="light-section">
                <ListarAtivos />
                <Footer />
            </section>
        </div>
        </>
        
    );

}


export default Ativos;