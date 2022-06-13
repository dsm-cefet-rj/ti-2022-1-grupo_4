import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ativos from '../../componentes/reutilizaveis/Ativos';
import CreateAtivoAccordion from '../../componentes/Accordion/CreateAtivoAccordion';
import styles from './Carteira.module.scss';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import vale from '../../media/vale.png'
import { fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';


function Carteira() {

    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    dispatch(fetchAtivosCarteira);
    // console.log(`Carteira: ${carteira}`);

    return (
            <>
            <Header />

            <div className="ativos-list">
                <section className={styles.lightSection}>
                    <div id="carteira-container">
                        <h3><strong>{`Carteira`}</strong></h3>
                
                        <div className={styles.listarContainer}>
                            {carteira.map(ativo => {
                                return(
                                <div className={styles.listaBensIndustriais}>

                                    <h3><strong>{ativo.empresa} ({ativo.ticker})</strong></h3>
                                    <div style={{margin: '10px', padding: '10px', border: '10px'}}>
                                        <div className='box flexRow'>
                                            <div key={ativo.ticker} className='row'>
                                                <div id="COLOCAR_IMAGEM" className='col'>
                                                    <img className={styles.imagemAtivo} src={vale} alt='Vale'/>
                                                </div>
                                                <div className='col'>
                                                    <div>
                                                        Quantidade: {ativo.quantidade}
                                                    </div>
                                                    <div>
                                                        Preço Médio: {ativo.preco_medio}
                                                    </div>
                                                    <div>
                                                        Rendimento: R$ {ativo.rendimento}
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col'>
                                                        <button type="button" className={`btn btn-success ${styles.teste}`} >Cotações Diárias</button>
                                                    </div>
                                                    <div className='col'>
                                                        <button type="button" className={`btn btn-success ${styles.teste}`} >Indicadores</button>
                                                    </div>
                                                    <div className='col'>
                                                    <span><button type="button" className={`btn btn-danger ${styles.teste}`} >Remover da Carteira</button></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Carteira;