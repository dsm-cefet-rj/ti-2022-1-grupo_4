import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ativos from '../reutilizaveis/Ativos';
import CreateAtivoAccordion from '../Accordion/CreateAtivoAccordion';
import styles from './Historico.module.scss';

function Historico() {
    return (
        <div id="historico-container">
            <div className="historico">
                <h2><strong>Histórico de Pesquisa de Ativos</strong></h2>
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
              {ativos.slice(7, 14).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
            </Accordion>
        </div>
    );
}

export default Historico;