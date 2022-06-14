import React, {useState} from 'react'; //trocar para dispatch
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail, getUserSenha } from '../../store/slices/LoginSlice';
import styles from './Cadastro.module.scss';

function Login() {

    
    const [emailState, setEmailState] = useState('')
    const [senhaState, setSenhaState] = useState('')

    const email = useSelector(state => state.login.email)
    const senha = useSelector(state => state.login.senha)

    const dispatch = useDispatch()


    function showLoginAlert(e) {
        e.preventDefault()
        alert(`Email: ${document.getElementById('email_usuario').value}\nSenha: ${document.getElementById('senha_usuario').value}`)
    }

    function handleKeyPress(e) {
        e.preventDefault()
        if (e.keyCode === 13) {
            alert(`Email: ${document.getElementById('email_usuario').value}\nSenha: ${document.getElementById('senha_usuario').value}`)
        }
    }

    return ( 
            <div className={styles.loginComponentes}>
            
                <div className={styles.loginContainer}>
                    <h2>Log in</h2>
                    <form>
                        <div className={styles.loginEmailContainer}>
                            <div className={styles.loginEmailInfo}>
                                <div className='login_email_info_container'>
                                    <label for='email'> </label>
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
                                    onChange={(event) => {
                                        const value = event.target.value
                                        setEmailState(value)
                                    }} 
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
                                    onChange={(event) => {
                                        const value = event.target.value
                                        setSenhaState(value)
                                    }}     
                                />
                            </div>
                        </div>
                    
                        <div className='login_button_container'> 
                            <div className='login_button'>
                                <Button 
                                    variant="outline-dark" 
                                    className='login_button' 
                                    onClick={(event) => {
                                        dispatch(getUserEmail(emailState))
                                        dispatch(getUserSenha(senhaState))
                                        showLoginAlert(event)
                                    }} 
                                    onKeyPress={(event) => {handleKeyPress(event)}}
                                >Log in</Button>
                            </div>
                            <div className='login_button_forgot_password_container'>
                                <a href='#'>Esqueceu sua senha?</a>
                            </div>
                        </div>
                    
                    </form>
                </div> 
            </div>    
    );
}

export default Login;