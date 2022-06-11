import React from 'react';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {

    render() {
        
        
        return ( 
            <div className='login_component'>
            
                <div className='login_container'>
                    <h2>Log in</h2>
                    <form>
                        <div className='login_email_container'>
                            <div className='login_email_info_container'>
                                <label for='email'>Email</label>
                                <span>
                                    Precisa de uma conta? 
                                    <span><a href='/sign-up'>Cadastre-se já</a></span>
                                </span>
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
                                <Button variant="outline-dark" className='login_button'>Log in</Button>
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
}

export default Login;