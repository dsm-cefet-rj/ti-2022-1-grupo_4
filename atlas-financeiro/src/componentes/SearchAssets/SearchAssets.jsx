import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchAssets.module.scss';

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
            <div className={styles.searchContainer}>
                <div className={`container-fluid ${styles.containerFluid}`}>
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