import React from 'react';
import AccordionSchema from './AccordionSchema';

function CreateAtivoAccordion(props) {
    return (
    <AccordionSchema 
      key={props.ativo.id}
      empresa={props.ativo.empresa} 
      ticker={props.ativo.ticker}
      tipo={props.ativo.tipo}
      max_52={props.ativo.max_52}
      min_52={props.ativo.min_52}
      setor={props.ativo.setor}
      subsetor={props.ativo.subsetor}
      vol_medio_2m={props.ativo.vol_medio_2m}
    />
    );
}

export default CreateAtivoAccordion;