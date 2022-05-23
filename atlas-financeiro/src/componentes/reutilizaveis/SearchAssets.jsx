import React, { useState } from "react";

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
            <div className="search-container">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input name='busca' value={search.pesquisa} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" onChange={handleChange} />
                        <input onClick={mostrarDetalhamento}  className="btn btn-primary" type='submit' value="Buscar" />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default SearchAssets;