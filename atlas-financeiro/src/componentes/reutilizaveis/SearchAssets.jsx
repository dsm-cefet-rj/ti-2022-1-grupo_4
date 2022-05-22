import React, { useState } from "react";

export default function SearchAssets() {

    const [search, setSearch] = useState({});

    function handleChange(e) {
        setSearch( {...search, [e.target.name]: e.target.value} )
    }

    function handleSubmit(event) {
        alert('Valor enviado: ' + search.busca);
        event.preventDefault();
    }

    return (
        <>
            <div className="search-container">
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input name='busca' value={search.pesquisa} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" onChange={handleChange} />
                        <input className="btn btn-primary" type='submit' value="Buscar" />
                    </form>
                </div>
            </div>
        </>
    )
}
