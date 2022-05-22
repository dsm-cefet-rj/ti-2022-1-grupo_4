import React from 'react';
import '../styles/styles.css';
import Accordion from 'react-bootstrap/Accordion';
import CreateAtivoAccordion from './CreateAtivoAccordion';
import ativos from './InfoGeralData';

function Recomendacoes() {
    return (
      <div id="recomendacoes">
        <div class="table-title">
          <h2><strong>Recomendações</strong></h2>
        </div>    
        <Accordion>
          {ativos.slice(0, 7).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
        </Accordion>
      </div>
    );
}

export default Recomendacoes;
