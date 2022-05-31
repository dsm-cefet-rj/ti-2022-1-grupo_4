import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/styles.css';

function Watchlist(props) {
    const ticker = useSelector(state => state.ticker);
    const cotacao = useSelector(state => state.cotacao);
    const dropdown = useSelector(state => state.dropdown);

    const dispatch1 = useDispatch();

    function handleTickerChange(e) {
        e.preventDefault();
        dispatch1({type: 'altera_ticker', payload: document.getElementById('busca_ticker').value})
    }
    
    function handleCotacaoChange(e) {
        e.preventDefault();
        dispatch1({type: 'altera_cotacao', payload: document.getElementById('busca_cotacao').value})
    }
    
    function handleDropdownChange(e) {
        e.preventDefault();
        dispatch1({type: 'acima_abaixo', payload: document.getElementById('acima_abaixo').value})
    }

    function mostrarBusca(event) {
        event.preventDefault();
        dispatch1({type: 'add_watchlist', payload: [ticker, cotacao, dropdown]})
        alert(`Ticker: ${ticker}\nCotação: ${cotacao}\nDropdown: ${dropdown}`);
        props.setState({ visible: true });
    }

    return (
        <div id="watchlist-container">
            <div class="watchlist">
                <h2><strong>Watchlist</strong></h2>
            </div>
            
            <form className='watchlist-form'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-ticker'><strong>Nome do Ticker</strong></label>
                    <input name="ticker_busca" type="text" class="form-control" id="busca_ticker" aria-describedby="emailHelp" placeholder='Insira o nome do ticker' onChange={handleTickerChange}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-value'><strong>{'Valor da Cotação (R$)'}</strong></label>
                    <input name="cotacao_busca" type="number" class="form-control" id="busca_cotacao" aria-describedby="emailHelp" placeholder='Insira o valor determinado da cotação' onChange={handleCotacaoChange}/>
                    <div id="emailHelp" class="form-text">Assim que o valor for atingido, um email será enviado ao usuário.</div>
                </div>

                <div className="centralize mb-3">
                    <div>
                        <select name="busca_select" id="acima_abaixo" className="form-select drop_select" aria-label="Default select example" onChange={handleDropdownChange}>
                            <option selected>Quando Alertar (Selecionar)</option>
                            <option value="0">Acima da Cotação</option>
                            <option value="1">Abaixo da Cotação</option>
                        </select>
                    </div>
                </div>

                <br>
                </br>
                
                
                <div className='row'>
                    <div className='col'>
                        <button type="submit" class="btn btn-primary cancel-button" >Cancelar</button>
                    </div>
                    <div className='col'>
                        <button type="submit" class="btn btn-primary submit-button" onClick={mostrarBusca}>Confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    );

    

}


export default Watchlist;