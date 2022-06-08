import React from 'react';
import { GrupoAtivos } from './Ativo';
import vale from '../media/vale.png'

function CreateSetorDeAtivo(props) {
    return (
      <div className={props.ativo.setor}>

          

          <h3><strong>Bens Industriais</strong></h3>
          <div>
              {GrupoAtivos.map(ativo => {
                  return(
                  <div className='box flexRow'>
                      <div key={props.ativo.ticker} className='row'>
                          <div id="COLOCAR_IMAGEM" className='col'>
                              <img className={props.ativo.imagem} src={vale} alt='Vale'/>
                          </div>
                          <div className='col'>
                              <div>
                                  Ticker: {{props.ativo.ticker}}
                              </div>
                              <div>
                                  Tipo: {{props.ativo.tipo}
                              </div>
                              <div>
                                  Última Cotação: R$ {props.ativo.Cotacoes.cotacoes[0].valor}
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col'>
                                  <button type="button" className="btn btn-success teste" onClick={handleClickCotacoesDiarias}>Cotações Diárias</button>
                              </div>
                              <div className='col'>
                                  <button type="button" className="btn btn-success teste" onClick={handleClickIndicadores}>Indicadores</button>
                              </div>
                              <div className='col'>
                              <span><button type="button" className="btn btn-success teste" onClick={handleClickAddCarteira}>Adicionar à Carteira</button></span>
                              </div>
                          </div>
                      </div>
                  </div>
                  );
              })}
          </div>
      
    
    );

}
export default CreateSetorDeAtivo;