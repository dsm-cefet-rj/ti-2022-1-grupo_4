import { React, useEffect } from 'react';
import ativos from '../reutilizaveis/Ativos';
import styles from './Cotacoes.module.scss';
import { useParams } from 'react-router-dom';
import { alterarId, fetchCotacoes } from '../../store/slices/CotacoesSlice';
import { useSelector, useDispatch } from 'react-redux';


const cotacoes = ativos[0].cotacoes;

const LinhaTabela = (props) => {
    return(
          <tr>
            <td> {props.cotacao.data} </td>
            <td> {props.cotacao.valor} </td>
          </tr>
    );
  }
  
  function TabelaCotacoes() {
    let { id } = useParams();

    const cotacoes = useSelector(state => state.cotacoes);
    const dispatch = useDispatch();

    async function pegaCotacoes() {
        await Promise.resolve(dispatch(alterarId(id)));
        await Promise.resolve(dispatch(fetchCotacoes()));
    }

    useEffect(() => {
        if(cotacoes.status === "not_loaded") {
            pegaCotacoes();
        }
    }, [cotacoes.status, dispatch])

    debugger;

    if(cotacoes.cotacoes.length !== 0){
        return(
            <div id='cotacao-diaria-container'>
                <div className="table-title">
                    <h2><strong>{cotacoes.cotacoes[0].informacoes_gerais.ticker}</strong></h2>
                    <h3>Histórico de Cotação Diária</h3>
                </div>
            <div className={styles.tableCotacaoContainer}>
                <table id="cotacoes" className="table table-striped">
                    <tbody>
                    <tr>
                        <td className={styles.cotacoesTd}><strong>Papel:</strong></td>
                        <td className={styles.cotacoesTd}><strong>{cotacoes.cotacoes[0].informacoes_gerais.empresa} ({ativos[0].informacoes_gerais.ticker})</strong></td>
                    </tr>
                    <tr>
                        <td className={styles.cotacoesTd}><strong>Data:</strong></td>
                        <td className={styles.cotacoesTd}><strong>Cotação:</strong></td>
                    </tr>
                    {cotacoes.cotacoes[0].cotacoes.map((cotacao) => 
                        <LinhaTabela key={cotacao.data} cotacao={cotacao} />
                        )}
                    </tbody>
                </table>
            </div>
            </div>
        );
                    }
  }
  
  export default TabelaCotacoes;
  export  {cotacoes};