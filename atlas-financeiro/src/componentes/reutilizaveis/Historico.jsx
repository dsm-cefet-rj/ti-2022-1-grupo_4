import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CreateAtivoAccordion from './CreateAtivoAccordion';
import ativos from './InfoGeralData';

function Historico() {
    return (
        <div id="historico-container">
            <div class="historico">
                <h2><strong>Histórico de Pesquisa de Ativos</strong></h2>
            </div>
            <div class="search-container">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                        <button class="btn btn-outline-dark" type="submit">Buscar</button>
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