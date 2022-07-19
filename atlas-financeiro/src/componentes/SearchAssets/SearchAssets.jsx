import React , {useState} from 'react'
import styles from './SearchAssets.module.scss'

/**
 * @module componentes/SearchAssets
 */

/** 
 * @typedef Search
 * @type {array}
 * @property {string} busca - nome do ativo buscado
 */

/**
 * Faz a pesquisa de um determinado ativo inserido pelo usuário.
 * @param {Search} search.busca - informação inserida pelo usuário. 
 */

function SearchAssets(props) {
    const [search, setSearch] = useState({});
   
    function handleChange(e) {
        setSearch( {...search, [e.target.name]: e.target.value} )
    }

    function mostrarDetalhamento(event) {
        event.preventDefault();
        alert('Valor enviado: ' + search.busca);
        props.setState({ visible: true });
    }

    return (
        <>
            <div className={styles.searchContainer}>
                <div className={`container-fluid ${styles.containerFluid}`}>
                    <form className="d-flex">
                        <input 
                            id="busca_ativo" 
                            name='busca' 
                            onChange={handleChange} 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Procurar por ação/empresa/fii" 
                            aria-label="Search" 
                        />
                        <input 
                            onClick={mostrarDetalhamento}  
                            className={`btn btn-primary ${styles.buttonSearch}`} 
                            type='submit' 
                            value="Buscar" 
                        />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default SearchAssets