import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import CreateAtivoAccordion from './CreateAtivoAccordion';
import ativos from './InfoGeralData';

function Carteira() {
    return (
        <div id="carteira-container">
            <div class="carteira">
                <h2><strong>Carteira de Ativos</strong></h2>
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
              {ativos.slice(0, 7).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
            </Accordion>
        </div>
    );
}

export default Carteira;