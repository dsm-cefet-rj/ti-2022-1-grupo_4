import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ativos from '../../componentes/reutilizaveis/Ativos';
import CreateAtivoAccordion from '../../componentes/Accordion/CreateAtivoAccordion';
import styles from './Carteira.module.scss';

function Carteira() {
    return (
        <div id="carteira-container">
            <div className="carteira">
                <h2><strong>Carteira de Ativos</strong></h2>
            </div>
            <div className={styles.searchContainer}>
                <div className={`container-fluid ${styles.containerFluid}`}>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <button className={`btn btn-outline-dark ${styles.btnOutlineDark}`} type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            
            <Accordion className={styles.accordion}>
              {ativos.slice(0, 7).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
            </Accordion>
        </div>
    );
}

export default Carteira;