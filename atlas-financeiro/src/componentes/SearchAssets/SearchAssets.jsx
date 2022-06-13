import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchAssets.module.scss';
import { alterarBusca, buscar } from '../../store/slices/BuscaSlice';

function SearchAssets(props) {

    const busca = useSelector(state => state.busca)
    const dispatch = useDispatch()

    function alteraString(event) {
        dispatch(alterarBusca(document.getElementById('busca_ativo').value));
    }
    
    
    function mostrarDetalhamento(event) {
        alert('Valor enviado: ' + busca);
    }

    return (
        <>
            <div className={styles.searchContainer}>
                <div className={`container-fluid ${styles.containerFluid}`}>
                    <form className="d-flex">
                        <input id="busca_ativo" name='busca' onChange={alteraString} value={busca} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" />
                        <input onClick={mostrarDetalhamento}  className={`btn btn-primary ${styles.buttonSearch}`} type='submit' value="Buscar" />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default SearchAssets;