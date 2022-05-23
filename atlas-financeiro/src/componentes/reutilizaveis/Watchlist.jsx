import React, { useState } from 'react';
import '../styles/styles.css';

function Watchlist(props) {
    const [ticker, setTicker] = useState({});
    const [cotacao, setCotacao] = useState({});
    const [dropdown, setDropdown] = useState({});

    function handleTickerChange(e) {
        setTicker( {...ticker, [e.target.name]: e.target.value} )
    }

    function handleCotacaoChange(e) {
        setCotacao( {...cotacao, [e.target.name]: e.target.value} )
    }
    
    function handleDropdownChange(e) {
        setDropdown( {...dropdown, [e.target.name]: e.target.value} )
    }

    function mostrarBusca(event) {
        event.preventDefault();
        alert(`Ticker: ${ticker.ticker_busca}\nCotação: ${cotacao.cotacao_busca}\nDropdown: ${dropdown.acima_abaixo}`);
        props.setState({visible: true});
    }

    return (
        <div id="watchlist-container">
            <div class="watchlist">
                <h2><strong>Watchlist</strong></h2>
            </div>
            
            <form className='watchlist-form'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-ticker'><strong>Nome do Ticker</strong></label>
                    <input name="ticker_busca" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Insira o nome do ticker' onChange={handleTickerChange}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-value'><strong>{'Valor da Cotação (R$)'}</strong></label>
                    <input name="cotacao_busca" type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Insira o valor determinado da cotação' onChange={handleCotacaoChange}/>
                    <div id="emailHelp" class="form-text">Assim que o valor for atingido, um email será enviado ao usuário.</div>
                </div>

                <div className="centralize mb-3">
                    <div>
                        <select name="acima_abaixo" className="form-select drop_select" aria-label="Default select example" onChange={handleDropdownChange}>
                            <option selected>Quando Alertar (Selecionar)</option>
                            <option value="0">Acima da Cotação</option>
                            <option value="1">Abaixo da Cotação</option>
                        </select>
                    </div>
                </div>

                <br>
                </br>
                
                <button type="submit" class="btn btn-primary submit-button" onClick={mostrarBusca}>Confirmar</button>
                <button type="submit" class="btn btn-primary cancel-button" >Cancelar</button>
                
            </form>
        </div>
    );

    

}


export default Watchlist;