import React from 'react';
import HeaderPerfil from './reutilizaveis/HeaderPerfil';
import PerfilContent from './reutilizaveis/PerfilContent';
import './styles/perfil-styles.css';


function Perfil() {
    return (
        <>
            <HeaderPerfil />
            <PerfilContent />
        </>
    );
}

export default Perfil;