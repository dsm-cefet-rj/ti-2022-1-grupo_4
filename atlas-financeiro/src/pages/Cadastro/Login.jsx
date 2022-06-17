import React, {useState} from 'react'; //trocar para dispatch
import Button from 'react-bootstrap/Button';
import Footer from '../../componentes/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { validacoesSchema } from '../../validacoesSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { appendErrors, useForm } from 'react-hook-form';
import { selectUsuariosById, selectAllUsuarios } from '../../store/slices/LoginSlice';
import { fetchLogin } from '../../store/slices/LoginSlice';
import {store} from '../../store/store';
import styles from './Cadastro.module.scss';

store.dispatch(fetchLogin())

function Login() {
    const dispatch = useDispatch()
    
    const usuarios = useSelector(selectAllUsuarios)
    //const status = useSelector(state => state.usuarios.status)  
    
    const [loginUsuario, setLoginUsuario] = useState({
        email: '',
        senha: '',
    })

    function handleInputChange(e){
        setLoginUsuario({...loginUsuario, [e.target.name]: e.target.value})
    }

    function logUsuarioIn(e){
        e.preventDefault()
        if (dispatch(fetchLogin(loginUsuario)) === usuarios.email && dispatch(fetchLogin(loginUsuario)) === usuarios.senha) {
            //var href= $(this).prop("href");????????????
        }
    }

    function showLoginAlert(e) {
        e.preventDefault()
        alert(`Email: ${document.getElementById('email_usuario').value}\nSenha: ${document.getElementById('senha_usuario').value}`)
    }
    /*
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validacoesSchema)
    })
    /*
    const [projetoOnLoad] = useState(
        id ? projetoFound ?? validacoesSchema.cast({}): validacoesSchema.cast({})
    )
    */
    
    return ( 
        <>
            <div className={styles.loginComponentes}>
            
                <div className={styles.loginContainer}>
                    <h2>Log in</h2>
                    <form>
                        <div className={styles.loginEmailContainer}>
                            <div className={styles.loginEmailInfo}>
                                <div className='login_email_info_container'>
                                    <label for='email'></label>
                                    <span>
                                        Não tem conta? 
                                        <span><a href='/sign-up'> Cadastre-se </a></span>
                                    </span>

                                </div>
                            </div>
                            <div className='login_email_input_container'>
                                <input 
                                    id='email_usuario' 
                                    className='email_input' 
                                    type='email' 
                                    placeholder='Email'
                                    value={loginUsuario.email}
                                    //defaultValue={projetoOnLoad.nome}
                                    //ref={register}
                                    onChange={handleInputChange}  
                                />
                                
                            </div>
                        </div>
                    
                        <div className='login_password_container'>
                            <div className='login_password_info_container'>
                                <label for='current-password'></label>
                                <span></span>
                            </div>
                            <div className='login_password_input_container'>
                                <input 
                                    id='senha_usuario' 
                                    className='senha_input' 
                                    type='password' 
                                    placeholder='Senha'
                                    value={loginUsuario.senha}
                                    //defaultValue={projetoOnLoad.senha}
                                    //ref={register}
                                    onChange={handleInputChange}      
                                />
                                
                            </div>
                        </div>
                    
                        <div className={styles.buttonContainer}> 
                            <div className='login_button'>
                                <Button 
                                    variant="outline-dark" 
                                    className='login_button' 
                                    onClick={(event) => {
                                        logUsuarioIn(event)
                                        showLoginAlert(event)
                                    }} 
                                >Log in</Button>
                            </div>
                            <div className='login_button_forgot_password_container'>
                                <a href='#'>Esqueceu sua senha?</a>
                            </div>
                        </div>
                    
                    </form>
                </div> 
           </div>  
           <Footer/>
        </>   
    );
}

export default Login;