import React, { Provider } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SearchAssets(props) {

    // const initialSearch = ''

    // function handleChange(busca = initialSearch, action) {
    //     action.type
    //     setSearch( {...search, [e.target.name]: e.target.value} )
    // }
    

    // const [search, setSearch] = useState({});

    const busca = useSelector(state => state.busca)
    const dispatch = useDispatch()

    function alterarBusca(event) {
        event.preventDefault();
        debugger
        dispatch({type: 'alterarBusca', payload: busca + event.nativeEvent.data})
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
                        <input name='busca' onChange={alterarBusca} value={busca} className="form-control me-2" type="search" placeholder="Procurar por ação/empresa/fii" aria-label="Search" />
                        <input onClick={mostrarDetalhamento}  className="btn btn-primary" type='submit' value="Buscar" />
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default SearchAssets;