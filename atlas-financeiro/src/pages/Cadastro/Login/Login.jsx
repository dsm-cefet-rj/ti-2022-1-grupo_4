import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../../componentes/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../../../store/slices/AuthenticationSlice';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

/**
 * @version 1.0.0
 * @module pages/Login
 */

/** 
 * @typedef Login
 * @type {React.ReactElement}
 * @property {object} auth - representa o token do usuário logado no site, que será utilizado para a adiciona dos ativos na carteira do mesmo.
 * @property {object} formErrors - representa um objeto para a validação das informações inseridas pelo usuário no campo de login.
 * @property {boolean} isSubmit - representa um boolean para saber se o usuário clicou em login, caso seja feito, as informações seram validadas no backend para a validação do usuário no site.
 * @property {object} loginState - representa um objeto o qual será atrubuidos as informações do usuário para a validação do login.
 */

/**
 * @returns {React.ReactElement} A renderização da página de login do site.
 */

function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)

    console.log(auth)

    useEffect(() => {
        if (auth._id) {
            navigate(`/`)
        }
    }, [auth._id, navigate])

    const [loginState, setLoginState] = useState({
        email: '',
        senha: ''
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    /**
     * Função que recebe as informações inseridas pelo usuário.
     * @const handleUpdateClick
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(loginState))
        setIsSubmit(true)
    }
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            Promise.resolve(dispatch(loginUsuario({
                'dadosInput': {
                    email: loginState.email,
                    senha: loginState.senha
                }
            })))
            alert(`O usuario foi logado com sucesso!`)
        }
    }, [formErrors, loginState])

    /**
     * Função que apresentam os parametros para a validação do login.
     * @const validate
     */
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.email) {
            errors.email = "Email é requerido!"
        } else if (!regex.test(values.email)) {
            errors.email = "Este não é um formato valido para email!"
        }

        if (!values.senha) {
            errors.senha = "Senha é requerida!"
        } else if (values.senha.length < 4) {
            errors.senha = "Senha precisa ser maior que 4 caracteres!"
        } else if (values.senha.length > 15) {
            errors.senha = "Senha precisa ser menor que 15 caracteres!"
        }
        return errors
    }

    return ( 
        <>
            <div className={styles.loginComponentes}>

                <div className={styles.loginContainer}>
                    <h2 className={styles.title}><strong>Log in</strong></h2>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.loginEmailContainer}>
                            <div className={styles.loginEmailInfo}>
                                <div className='login_email_info_container'>
                                    <label className={styles.emailLabel}><strong>Email</strong></label>
                                    <span className={styles.emailSpan}>
                                        Não tem conta? 
                                        <span><a className={styles.cadastreSpan} href='/sign-up'> Cadastre-se </a></span>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.loginEmailInputContainer}>
                                <input 
                                    type='text'
                                    className={styles.emailInput} 
                                    name='email'
                                    onChange={(e) => setLoginState({
                                    ...loginState, email: e.target.value
                                })}
                                />
                                <p className={styles.error}>{formErrors.email}</p>
                            </div>
                        </div>

                        <div className={styles.loginPasswordContainer}>
                            <label className={styles.senhaLabel}><strong>Senha</strong></label>
                            <div className={styles.loginPasswordInputContainer}>
                                <input  
                                    type='password' 
                                    name='senha'
                                    className={styles.passwordInput}
                                    onChange={(e) => setLoginState({
                                    ...loginState, senha: e.target.value
                                })}
                                />
                                <p className={styles.error}>{formErrors.senha}</p>
                            </div>
                        </div>
                        
                        <div className={styles.buttonContainer}> 
                            <div className='login_button'>
                                <Button 
                                    variant="outline-dark" 
                                    className={styles.loginButton} 
                                    id='submit' 
                                    type='submit'>{auth.loginStatus === 'pending' ? "Logged" : "Log in"}</Button>
                                {auth.loginStatus === 'rejected' ? (<p>{auth.loginError}</p>) : null}
                            </div>
                            <div className='login_button_forgot_password_container'>
                                <a className={styles.esquecaSpan} href='#'>Esqueceu sua senha?</a>
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