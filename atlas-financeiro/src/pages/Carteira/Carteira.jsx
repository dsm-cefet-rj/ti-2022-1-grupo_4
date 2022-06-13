import React from 'react';
import styles from './Carteira.module.scss';
import Footer from '../../componentes/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import vale from '../../media/vale.png'
import { fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';
import HeaderPerfil from '../../componentes/HeaderPerfil/HeaderPerfil';


function Carteira() {

    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();

    dispatch(fetchAtivosCarteira);
    // console.log(`Carteira: ${carteira}`);

    return (
        <>
            <HeaderPerfil />
            <section className={styles.lightSection}>
                    <div id="carteira-container">
                        <div className={styles.carteiraTitle}>
                            <h3><strong>{`Carteira`}</strong></h3>
                        </div>
                
                        <div className={styles.carteiraContainer}>
                            {carteira.map(ativo => {
                                return(
                                <div className={styles.ativosCarteira}>
                                    <div className={styles.ativoCarteira}>
                                        <h3><strong>{ativo.empresa} ({ativo.ticker})</strong></h3>
                                    </div>
                                    
                                    <div style={{margin: '10px', padding: '10px', border: '10px'}}>
                                        <div className='box flexRow'>
                                            <div key={ativo.ticker} className='row'>
                                                <div id="COLOCAR_IMAGEM" className={`col ${styles.ativoImagemCarteira}`}>
                                                    <img className={styles.imagemAtivo} src={vale} alt='Vale'/>
                                                </div>
                                                <div className={`col ${styles.ativoValueCarteira}`}>
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
                                                        <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href='/detalhamento_cotacoes'>Cotações Diárias</a></button>
                                                    </div>
                                                    <div className='col'>
                                                        <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href='/detalhamento_indicadores'>Indicadores</a></button>
                                                    </div>
                                                    <div className='col'>
                                                    <span><button type="button" className={`btn btn-danger ${styles.buttonCancel}`} >Remover da Carteira</button></span>
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
                    <Footer />
            </section>
        </>
    );
}

export default Carteira;