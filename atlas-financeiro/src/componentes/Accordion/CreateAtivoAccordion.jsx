import React from 'react'
import AccordionSchema from './AccordionSchema'

/**
 * @module componentes/CreateAtivoAccordion
 */

function CreateAtivoAccordion(props) {
    return (
    <AccordionSchema 
      key={props.ativo.id}
      empresa={props.ativo.informacoes_gerais.empresa}
      ticker={props.ativo.informacoes_gerais.ticker}
      tipo={props.ativo.informacoes_gerais.tipo}
      max_52={props.ativo.informacoes_gerais.max_52}
      min_52={props.ativo.informacoes_gerais.min_52}
      setor={props.ativo.informacoes_gerais.setor}
      subsetor={props.ativo.informacoes_gerais.subsetor}
      vol_medio_2m={props.ativo.informacoes_gerais.vol_medio_2m}
      cotacoes={props.ativo.cotacoes}
    />
    )
}

export default CreateAtivoAccordion