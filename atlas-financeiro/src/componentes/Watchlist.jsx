import React from 'react';



function Watchlist() {
    return (
        <div id="watchlist-container">
            <div class="watchlist">
                <h2><strong>Watchlist</strong></h2>
            </div>
            
            <form className='watchlist-form'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-ticker'><strong>Nome do Ticker</strong></label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Insira o nome do ticker'/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" className='watchlist-form-title-value'><strong>{'Valor da Cotação (R$)'}</strong></label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Insira o valor determinado da cotação'/>
                    <div id="emailHelp" class="form-text">Assim que o valor for atingido, um email será enviado ao usuário.</div>
                </div>
                
                <button type="submit" class="btn btn-primary submit-button" >Confirmar</button>
                <button type="submit" class="btn btn-primary cancel-button" >Cancelar</button>
            </form>
        </div>
    );
}

export default Watchlist;