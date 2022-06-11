import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Cadastro.module.scss';

function Login() {
    const email = useSelector(state => state.email);
    const senha = useSelector(state => state.senha);

    const dispatch2 = useDispatch();

    function handleEmailChange(e) {
        e.preventDefault();
        dispatch2({
            type: 'receber_email', 
            payload: document.getElementById('email_usuario').value
        })
    }

    function handleSenhaChange(e) {
        e.preventDefault();
        dispatch2({
            type: 'receber_senha',
            payload: document.getElementById('senha_usuario').value
        })
    }

    function mostrarLogin(e) {
        e.preventDefault();
        dispatch2({
            type: 'recebe_login', 
            payload: [email, senha]
        })
        alert(`Email: ${email}\nSenha: ${senha}`);
    }

    return ( 
            <div className='login_component'>
            
                <div className={styles.loginContainer}>
                    <h2>Log in</h2>
                    <form>
                        <div className={styles.loginEmailContainer}>
                            <div className='login_email_info_container'>
                                <label for='email'>Email</label>
                                <span>
                                    Precisa de uma conta? 
                                    <span><a href='/sign-up'>Cadastre-se já</a></span>
                                </span>
                            </div>
                            <div className='login_email_input_container'>
                                <input id='email_usuario' className='email_input' type='email' onChange={handleEmailChange} />
                            </div>
                        </div>
                    
                        <div className='login_password_container'>
                            <div className='login_password_info_container'>
                                <label for='current-password'>Senha</label>
                                <span>Amostrar</span>
                            </div>
                            <div className='login_password_input_container'>
                                <input id='senha_usuario' className='senha_input' type='password' onChange={handleSenhaChange} />
                            </div>
                        </div>
                    
                        <div className='login_button_container'> 
                            <div className='login_button'>
                                <Button variant="outline-dark" className='login_button' onClick={mostrarLogin} >Log in</Button>
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