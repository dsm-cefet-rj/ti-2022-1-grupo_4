import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserNome, getUserEstado, getUserPais, getUserStatus, getUserSobre, getUserEmail, getUserSenha } from '../../store/slices/SignUpSlice';
import styles from './Cadastro.module.scss';

function SignUp() {

    const [nomeState, setNomeState] = useState('')
    const [estadoState, setEstadoState] = useState('')
    const [paisState, setPaisState] = useState('')
    const [statusState, setStatusState] = useState('')
    const [sobreState, setSobreState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [senhaState, setSenhaState] = useState('')

    const nome = useSelector(state => state.cadastro.nome)
    const estado = useSelector(state => state.cadastro.localidade.estado)
    const pais = useSelector(state => state.cadastro.localidade.pais)
    const status = useSelector(state => state.cadastro.status)
    const sobre = useSelector(state => state.cadastro.sobre)
    const email = useSelector(state => state.cadastro.email)
    const senha = useSelector(state => state.cadastro.senha)

    const dispatch = useDispatch()

    function showCadastroAlert(e) {
        e.preventDefault()
        alert(`Nome: ${document.getElementById('nome_cadastro_usuario').value}\n
        Estado: ${document.getElementById('estado_cadastro_usuario').value}\n
        Pais: ${document.getElementById('pais_cadastro_usuario').value}\n
        Status: ${document.getElementById('status_cadastro_usuario').value}\n
        Sobre: ${document.getElementById('sobre_cadastro_usuario').value}\n
        Email: ${document.getElementById('email_cadastro_usuario').value}\n
        Senha: ${document.getElementById('senha_cadastro_usuario').value}\n
        `)
    }

    return (
        <div className={styles.loginComponentes}>
            <div className={styles.SignUpConteiner}>
                <h2>Cadastre-se</h2>
                    <form>
                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_nome_container'>
                            <div className='cadastro_nome_info_container'>
                                <label for='text'></label>
                            </div>
                            <div className='cadastro_nome_input_container'>
                                <input 
                                id='nome_cadastro_usuario'
                                className='nome_input' 
                                type='text' 
                                placeholder='Nome'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setNomeState(value)
                                }}     
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_status_container'>
                            <div className='cadastro_status_info_container'>
                                <label for='status'></label>
                            </div>
                            <div className='cadastro_status_input_container'>
                                <input 
                                id='status_cadastro_usuario'
                                className='status_input' 
                                type='text' 
                                placeholder='Status'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setStatusState(value)
                                }}     
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_estado_container'>
                            <div className='cadastro_estado_info_container'>
                                <label for='estado'></label>
                            </div>
                            <div className='cadastro_estado_input_container'>
                                <input 
                                id='estado_cadastro_usuario'
                                className='estado_input' 
                                type='text' 
                                placeholder='Estado (UF)'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setEstadoState(value)
                                }}    
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_pais_container'>
                            <div className='cadastro_pais_info_container'>
                                <label for='pais'></label>
                            </div>
                            <div className='cadastro_pais_input_container'>
                                <input 
                                id='pais_cadastro_usuario'
                                className='pais_input' 
                                type='text' 
                                placeholder='País'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setPaisState(value)
                                }}    
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_sobre_container'>
                            <div className='cadastro_sobre_info_container'>
                                <label for='sobre'></label>
                            </div>
                            <div className='cadastro_sobre_input_container'>
                                <input 
                                id='sobre_cadastro_usuario'
                                className='sobre_input' 
                                type='text' 
                                placeholder='Descrição'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setSobreState(value)
                                }}    
                                />
                            </div>
                        </div>
                    </div>

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_email_container'>
                            <div className='cadastro_email_info_container'>
                                <label for='email'></label>
                            </div>
                            <div className='cadastro_email_input_container'>
                                <input 
                                className='email_input' 
                                type='email' 
                                placeholder='Email'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setEmailState(value)
                                }}    
                                />
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroPasswordConteiner">
                        <div className='cadastro_password_container'>
                            <div className='cadastro_password_info_container'>
                                <label for='password'></label>
                            </div>
                            <div className='cadastro_password_input_container'>
                                <input 
                                type='password'     
                                placeholder='Senha'
                                />
                            </div>
                            <div className='cadastro_password_info_container'>
                                <label for='current-password'></label>
                            </div>
                            <div className='cadastro_password_input_container'>
                                <input 
                                id='senha_cadastro_usuario'
                                type='password' 
                                placeholder='Senha Novamente'
                                onChange={(event) => {
                                    const value = event.target.value
                                    setSenhaState(value)
                                }}    
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}> 
                        <div className='login_button'>
                            <Button 
                                variant="outline-dark" 
                                className='login_button'
                                onClick={(event) => {
                                    dispatch(getUserNome(nomeState))
                                    dispatch(getUserEstado(estadoState))
                                    dispatch(getUserPais(paisState))
                                    dispatch(getUserStatus(statusState))
                                    dispatch(getUserSobre(sobreState))
                                    dispatch(getUserEmail(emailState))
                                    dispatch(getUserSenha(senhaState))
                                    showCadastroAlert(event)
                                }}
                            >Cadastrar</Button>
                        </div>
                    </div>
                        
                </form>
            </div>
        </div>
        
    );
}

export default SignUp;