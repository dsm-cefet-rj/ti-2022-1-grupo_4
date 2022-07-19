import React from "react";
import ListarAtivos from "../../componentes/ListarAtivos/ListarAtivos";
import styles from './ListaDeAtivos.module.scss';

/**
 * @module componentes/ListarAtivos
 * @returns {React.ReactElement} Elemento mais externo, que renderiza, indiretamente, a lista de ativos, por meio do arquivo ListarAtivos.jsx. 
 */

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