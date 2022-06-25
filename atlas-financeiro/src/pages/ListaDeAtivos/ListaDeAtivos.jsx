import React from "react";
import ListarAtivos from "../../componentes/ListarAtivos/ListarAtivos";
import styles from './ListaDeAtivos.module.scss';

function Ativos() {
    return (
        <>
            <div className="ativos-list">
                <ListarAtivos />
            </div>
        </>
    );

}


export default Ativos;