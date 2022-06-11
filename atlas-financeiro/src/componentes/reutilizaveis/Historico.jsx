import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CreateAtivoAccordion from './CreateAtivoAccordion';
import ativos from './Ativos';

function Historico() {
    return (
        <div id="historico-container">
            <div className="historico">
                <h2><strong>Histórico de Pesquisa de Ativos</strong></h2>
            </div>
            <div className="search-container">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
            
            <Accordion>
              {ativos.slice(7, 14).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
            </Accordion>
        </div>
    );
}

export default Historico;