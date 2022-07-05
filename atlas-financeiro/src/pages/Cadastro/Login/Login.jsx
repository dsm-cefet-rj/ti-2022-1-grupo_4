import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../../componentes/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginUsuario } from '../../../store/slices/AuthenticationSlice';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';


function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)

    console.log(auth)

    const [loginState, setLoginState] = useState({
        email: '',
        senha: ''
    })

    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


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

    useEffect(() => {
        if (auth._id) {
            navigate(`/carteira/${auth._id}`)
        }
    }, [auth._id, navigate])

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
                                <Button variant="outline-dark" className={styles.loginButton} id='submit' type='submit'>Log in</Button>
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