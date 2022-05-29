import React, { Provider } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SearchAssets(props) {

    const busca = useSelector(state => state.busca)
    const dispatch = useDispatch()

    function alterarBusca(event) {
        event.preventDefault();
        dispatch({type: 'alterarBusca', payload: document.getElementById('busca_ativo').value})
    }


    function mostrarDetalhamento(event) {
        event.preventDefault();
        dispatch({type: 'buscar', payload: busca})
        alert('Valor enviado: ' + busca);
        props.setState({ visible: true });
    }

    return (
        <>
            <div className="search-container">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input id="busca_ativo" name='busca' onChange={alterarBusca} value={busca} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" />
                        <input onClick={mostrarDetalhamento}  className="btn btn-primary" type='submit' value="Buscar" />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default SearchAssets;