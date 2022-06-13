import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Cadastro.module.scss';

function SignUp() {
    return (
        <div className='signup-component'>
            <div className={styles.loginContainer}>
            <h2>Cadastre-se</h2>
                <form>
                    <div className={styles.loginEmailConteiner}>
                        <div className='login_email_container'>
                            <div className='login_email_info_container'>
                                <label for='email'> </label>
                            </div>
                            <div className='login_email_input_container'>
                                <input 
                                className='email_input' 
                                type='email' 
                                placeholder='Email'
                                />
                            </div>
                        </div>
                    </div> 

                    <div className={styles.loginPasswordConteiner}>
                        <div className='login_password_container'>
                            <div className='login_password_info_container'>
                                <label for='current-password'> </label>
                                <span></span>
                            </div>
                            <div className='login_password_input_container'>
                                <input 
                                type='password' 
                                placeholder='Senha'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='login_button_container'> 
                        <div className='login_button'>
                            <Button variant="outline-dark" className='login_button'>Cadastrar</Button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
        
    );
}

export default SignUp;