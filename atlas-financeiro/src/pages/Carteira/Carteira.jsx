import { React, useState, useEffect } from 'react';
import styles from './Carteira.module.scss';
import Footer from '../../componentes/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import vale from '../../media/vale.png';
import HeaderPerfil from '../../componentes/HeaderPerfil/HeaderPerfil';
import { fetchAtivosCarteira } from '../../store/slices/CarteiraSlice';
import { adicionarAtivoCarteira, deletarAtivoCarteira, updateAtivoCarteira, deletarCarteira } from '../../store/slices/CarteiraSlice';
import PopupCarteira from '../../componentes/Popup/PopupCarteira';
import { useParams, useHistory } from 'react-router-dom';


function Carteira() {

    let { id } = useParams();

    const [buttonPopup, setButtonPopup] = useState(false);

    const carteira = useSelector(state => state.carteira);
    const dispatch = useDispatch();



    useEffect(() => {
        if(carteira.status === "not_loaded") {
            Promise.resolve(dispatch(fetchAtivosCarteira()));
        }
    }, [carteira.status, dispatch])

    function removerAtivoCarteira() {
        alert('Are you sure?');
    }

    // debugger;

    return (
        <>
            <HeaderPerfil />
            <section className={styles.lightSection}>
                    <div id="carteira-container">
                        <div className={styles.carteiraTitle}>
                            <h3><strong>{`Carteira`}</strong></h3>
                        </div>
                
                        <div className={styles.carteiraContainer}>
                            {carteira.carteira.map(ativo => {
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
                                                    <div className='col' style={{'align-self': 'center'}}>
                                                        <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href='/detalhamento_cotacoes'>Cotações Diárias</a></button>
                                                    </div>
                                                    <div className='col' style={{'align-self': 'center'}}>
                                                        <button type="button" className={`btn btn-success ${styles.buttonOutro}`} ><a className={styles.hRef} href='/detalhamento_indicadores'>Indicadores</a></button>
                                                    </div>
                                                    <div className='col' style={{'align-self': 'center'}}>
                                                        <button type="button" className={`btn btn-danger ${styles.buttonCancel}`} onClick={removerAtivoCarteira} >Remover da Carteira</button>
                                                    </div>
                                                    <div className='col' style={{'align-self': 'center'}}>
                                                        <button type="button" className={`btn btn-success ${styles.buttonOutro}`} onClick={() => setButtonPopup(true)} ><a className={styles.hRef}>Atualizar Ativo</a></button>
                                                        <PopupCarteira trigger={buttonPopup} setTrigger={setButtonPopup} empresa={ativo.empresa} ticker={ativo.ticker}/>
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