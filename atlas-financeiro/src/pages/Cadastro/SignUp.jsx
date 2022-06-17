import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../componentes/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addSignUpServer, selectAllUsuarios } from '../../store/slices/SignUpSlice';
import { fetchSignUp } from '../../store/slices/SignUpSlice';
import {store} from '../../store/store';
import styles from './Cadastro.module.scss';

store.dispatch(fetchSignUp())

function SignUp() {
    const dispatch = useDispatch()
    
    const usuarios = useSelector(selectAllUsuarios)
    const status = useSelector(state => state.usuarios.status)  
   
    
    const [newUsuario, setNewUsuario] = useState({
        nome: '',
        localidade: {
            estado: '',
            pais: '',
        },
        status: '',
        sobre: '',
        email: '',
        senha: '',
    })

    function handleInputChange(e){
        setNewUsuario({...newUsuario, [e.target.name]: e.target.value})
    }

    function createUsuario(e){
        e.preventDefault();
        dispatch(addSignUpServer(newUsuario))
        alert("O usuario foi cadastrado com sucesso!")
    }

    return (
        <>
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
                                name='nome'
                                className='nome_input' 
                                type='text' 
                                placeholder='Nome'
                                value={newUsuario.nome}
                                onChange={handleInputChange}     
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
                                name='status'
                                className='status_input' 
                                type='text' 
                                placeholder='Status'
                                value={newUsuario.status}
                                onChange={handleInputChange}      
                                />
                            </div>
                        </div>
                    </div> 

                    <div className={styles.estadoInput}>
                        <div className='cadastro_estado_container'>
                            <div className='cadastro_estado_container'>
                                <label for='estado'></label>
                            </div>
                            <div className='cadastro_estado_input_container'>
                                <input 
                                id='estado_cadastro_usuario'
                                name='estado'
                                className='estado_input' 
                                type='text' 
                                placeholder='Estado (UF)'
                                value={newUsuario.localidade.estado}
                                onChange={handleInputChange}     
                                />
                            </div>
                        </div>
                    </div> 

                    <div className={styles.estadoInput}>
                        <div className='cadastro_pais_container'>
                            <div className='cadastro_pais_info_container'>
                                <label for='pais'></label>
                            </div>
                            <div className='cadastro_pais_input_container'>
                                <input 
                                id='pais_cadastro_usuario'
                                name='pais'
                                className='pais_input' 
                                type='text' 
                                placeholder='País'
                                value={newUsuario.localidade.pais}
                                onChange={handleInputChange}     
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
                                name='sobre'
                                className='sobre_input' 
                                type='text' 
                                placeholder='Descrição'
                                value={newUsuario.sobre}
                                onChange={handleInputChange}     
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
                                id='email_cadastro_usuario'
                                className='email_input' 
                                name='email'
                                type='email' 
                                placeholder='Email'
                                value={newUsuario.email}
                                onChange={handleInputChange}    
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
                                name='senha'
                                type='password' 
                                placeholder='Senha Novamente'
                                value={newUsuario.senha}
                                onChange={handleInputChange}     
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}> 
                        <div className='login_button'>
                            <Button 
                                variant="outline-dark" 
                                className='login_button'
                                
                                onClick={(e)=>createUsuario(e)}
                            >Cadastrar</Button>
                        </div>
                    </div>
                        
                </form>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default SignUp;