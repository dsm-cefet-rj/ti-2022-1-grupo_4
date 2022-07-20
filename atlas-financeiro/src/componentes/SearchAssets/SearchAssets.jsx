import React , {useState} from 'react'
import styles from './SearchAssets.module.scss'

/**
 * @module componentes/SearchAssets
 */

/** 
 * @typedef SearchAssets
 * @type {React.ReactElement}
 * @property {string} search - define a informação inserida pelo usuário na barra de pesquisa.
 */

/**
 * @returns {React.ReactElement} A renderização da área de busca na página inicial.
 */

function SearchAssets(props) {
    const [search, setSearch] = useState({})
   
    /**
     * Função que pega a informação (ativo) inserido pelo usuário.
     * @function handleChange
     */
    function handleChange(e) {
        setSearch( {...search, [e.target.name]: e.target.value} )
    }

    /**
     * Função que é ativada assim que o usuario clicar no botão buscar,
     * amostrando o detalhamento do ativo especificado pelo cliente na
     * barra de pesquisa.
     * @function mostrarDetalhamento
     * @param visible - assim que a função for ativada, visible(false) atualiza para 'true', amostrando o detalhamento do ativo.
     */
    function mostrarDetalhamento(event) {
        event.preventDefault();
        alert('Valor enviado: ' + search.busca);
        props.setTicker(`${search.busca}`)
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