import React from 'react';
import Button from 'react-bootstrap/Button';

function SignUp() {
    return (
        <div className='signup-component'>
            <div className='signup-container'>
            <h2>Cadastre-se já</h2>
                <form>
                    <div className='login_email_container'>
                        <div className='login_email_info_container'>
                            <label for='email'>Email</label>
                        </div>
                        <div className='login_email_input_container'>
                            <input className='email_input' type='email' />
                        </div>
                    </div>
                    
                    <div className='login_password_container'>
                        <div className='login_password_info_container'>
                            <label for='current-password'>Senha</label>
                            <span>Amostrar</span>
                        </div>
                        <div className='login_password_input_container'>
                            <input type='password' />
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