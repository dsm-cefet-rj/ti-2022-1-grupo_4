import React, { useState, useEffect } from 'react'; 
import Button from 'react-bootstrap/Button';
import Footer from '../../componentes/Footer/Footer';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../store/slices/LoginSlice';
import {store} from '../../store/store';
import styles from './Cadastro.module.scss';

store.dispatch(fetchLogin())

function Login() {

    const dispatch = useDispatch()

    const [loginState, setLoginState] = useState({
        email: '',
        senha: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handelChange = (e) => {
        const {name, value} = e.target
        setLoginState({...loginState, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(loginState))
        setIsSubmit(true)
    }
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(loginState)
        }
    }, [formErrors])

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
                                    <label>Email:</label>
                                    <span>
                                        Não tem conta? 
                                        <span><a href='/sign-up'> Cadastre-se </a></span>
                                    </span>
                                </div>
                            </div>
                            <div className='login_email_input_container'>
                                <input 
                                    type='text'
                                    className={styles.geralInput} 
                                    name='email'
                                    value={loginState.email}
                                    onChange={handelChange}
                                />
                                <p>{formErrors.email}</p>
                            </div>
                        </div>

                        <div className='login_password_container'>
                            <label>Senha:</label>
                            <div className='login_password_input_container'>
                                <input  
                                    type='password' 
                                    name='senha'
                                    value={loginState.senha}
                                    onChange={handelChange}
                                />
                                <p>{formErrors.senha}</p>
                            </div>
                        </div>
                        
                        <div className={styles.buttonContainer}> 
                            <div className='login_button'>
                                <Button variant="outline-dark" className='login_button' id='submit' type='submit'>Log in</Button>
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