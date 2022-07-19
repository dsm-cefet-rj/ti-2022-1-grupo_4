import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import ativos from '../reutilizaveis/Ativos'
import CreateAtivoAccordion from '../Accordion/CreateAtivoAccordion'
import styles from './Recomendacoes.module.scss'
import { useSelector } from 'react-redux'
import Popup from '../Popup/Popup'


function Recomendacoes() {
    return (
      <div id="recomendacoes">
        <div className={styles.tableTitle}>
          <h2><strong>Ativos Populares</strong></h2>
        </div>    
        <Accordion className={styles.accordion}>
          {ativos.slice(0, 7).map(ativo => <CreateAtivoAccordion ativo={ativo}/>)}
        </Accordion>
      </div>
    )
}

export default Recomendacoes
