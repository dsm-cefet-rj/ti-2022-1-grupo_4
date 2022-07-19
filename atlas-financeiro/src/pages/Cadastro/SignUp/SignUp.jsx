import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Footer from '../../../componentes/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpNewUsuario, selectAllUsuarios } from '../../../store/slices/AuthenticationSlice';
import styles from './SignUp.module.scss';

/**
 * @version 1.0.0
 * @module pages/SignUp
 */

/** 
 * @typedef SignUp
 * @type {React.ReactElement}
 * @property {object} auth - representa o token do usuário logado no site, que será utilizado para a adiciona dos ativos na carteira do mesmo.
 * @property {object} formErrors - representa um objeto para a validação das informações inseridas pelo usuário no campo de login.
 * @property {boolean} isSubmit - representa um boolean para saber se o usuário clicou em login, caso seja feito, as informações seram validadas no backend para a validação do usuário no site.
 * @property {object} newUsuario - representa um objeto o qual será atrubuidos as informações para a criação de um novo usuário no site.
 */

/**
 * @returns {React.ReactElement} A renderização da página de cadastro do site.
 */

function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const usuarios = useSelector(selectAllUsuarios)
    const auth = useSelector(state => state.auth)
    
    console.log(auth)

    useEffect(() => {
        if (auth._id) {
            navigate(`/`)
        }
    }, [auth._id, navigate])

    const [newUsuario, setNewUsuario] = useState({
        nome: '',
        status: '',
        email: '',
        senha: '',
        estado: '',
        pais: '',
        descricao: '',
    })
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

     /**
     * Função que recebe as informações inseridas pelo usuário.
     * @const handleSubmit
     */
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(newUsuario))
        setIsSubmit(true)
    }
    
    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {  
            Promise.resolve(dispatch(signUpNewUsuario({
                'dadosInput': {
                    usuario_id: 0,
                    nome: newUsuario.nome,
                    status: newUsuario.status,
                    email: newUsuario.email,
                    senha: newUsuario.senha,
                    estado: newUsuario.estado,
                    pais: newUsuario.pais,
                    descricao: newUsuario.descricao
                }
            })))
            alert(`O usuario foi cadastrado com sucesso!`)
        }
    }, [formErrors, newUsuario])
    
    /**
     * Função que apresentam os parametros para a validação do cadastro.
     * @const validate
     */
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.nome) {
            errors.nome = "Nome é requerido!"
        }

        if (!values.status) {
            errors.status = "Status é requerid!"
        }

        if (!values.estado) {
            errors.estado = "Estado é requerido!"
        }

        if (!values.pais) {
            errors.pais = "País é requerido!"
        }

        if (!values.email) {
            errors.email = "Email é requerido!"
        } else if (!regex.test(values.email)) {
            errors.email = "Este não é um formato valido para email!"
        }

        if (!values.descricao) {
            errors.descricao = "Descrição é requerida!"
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
        <div className={styles.signUpComponentes}>
            <div className={styles.signUpConteiner}>
                <h2 className={styles.title} ><strong>Cadastre-se</strong></h2>
                    <form onSubmit={handleSubmit}>
                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_nome_container'>
                            <div className='cadastro_nome_info_container'>
                            <label className={styles.nomeLabel}><strong>Nome</strong></label>
                            </div>
                            <div className='cadastro_nome_input_container'>
                                <input 
                                id='nome_cadastro_usuario'
                                name='nome'
                                className={styles.input} 
                                type='text' 
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, nome: e.target.value 
                                })} 
                                />
                                <p>{formErrors.nome}</p>
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_status_container'>
                            <div className='cadastro_status_info_container'>
                            <label className={styles.statusLabel}><strong>Status</strong></label>
                            </div>
                            <div className='cadastro_status_input_container'>
                                <input 
                                id='status_cadastro_usuario'
                                name='status'
                                className={styles.input}
                                type='text' 
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, status: e.target.value 
                                })}     
                                />
                                <p>{formErrors.status}</p>
                            </div>
                        </div>
                    </div> 

                    <div className={styles.estadoInput}>
                        <div className='cadastro_estado_container'>
                            <div className='cadastro_estado_container'>
                            <label className={styles.estadoLabel}><strong>Estado(UF)</strong></label>
                            </div>
                            <div className='cadastro_estado_input_container'>
                                <input 
                                id='estado_cadastro_usuario'
                                name='estado'
                                className={styles.input}
                                type='text' 
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, estado: e.target.value 
                                })}   
                                />
                                <p>{formErrors.estado}</p>
                            </div>
                        </div>
                    </div> 

                    <div className={styles.estadoInput}>
                        <div className='cadastro_pais_container'>
                            <div className='cadastro_pais_info_container'>
                            <label className={styles.paisLabel}><strong>País</strong></label>
                            </div>
                            <div className='cadastro_pais_input_container'>
                                <input 
                                id='pais_cadastro_usuario'
                                name='pais'
                                className={styles.input}
                                type='text' 
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, pais: e.target.value 
                                })}      
                                />
                                <p>{formErrors.pais}</p>
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_sobre_container'>
                            <div className='cadastro_sobre_info_container'>
                            <label className={styles.sobreLabel}><strong>Descrição</strong></label>
                            </div>
                            <div className='cadastro_sobre_input_container'>
                                <textarea 
                                id='sobre_cadastro_usuario'
                                name='descricao'
                                className={styles.input} 
                                type='text' 
                                placeholder='Breve descrição sobre você'
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, descricao: e.target.value 
                                })}     
                                />
                                <p>{formErrors.sobre}</p>
                            </div>
                        </div>
                    </div>

                    <div className="cadastroEmailConteiner">
                        <div className='cadastro_email_container'>
                            <div className='cadastro_email_info_container'>
                            <label className={styles.emailLabel}><strong>Email</strong></label>
                            </div>
                            <div className='cadastro_email_input_container'>
                                <input 
                                id='email_cadastro_usuario'
                                className={styles.input} 
                                name='email'
                                type='email' 
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, email: e.target.value 
                                })}   
                                />
                                <p>{formErrors.email}</p>
                            </div>
                        </div>
                    </div> 

                    <div className="cadastroPasswordConteiner">
                        <div className='cadastro_password_container'>
                            <div className='cadastro_password_info_container'>
                            <label className={styles.senhaLabel}><strong>Senha</strong></label>
                            </div>
                            <div className='cadastro_password_input_container'>
                                <input 
                                name='senha'
                                type='password'     
                                className={styles.input}
                                onChange={(e) => setNewUsuario({ 
                                    ...newUsuario, senha: e.target.value 
                                })}   
                                />
                                <p>{formErrors.senha}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}> 
                        <div className='login_button'>
                            <Button 
                                id='submit'
                                variant="outline-dark" 
                                className={styles.signupButton}
                                type='submit'
                            >{auth.signUpStatus === 'pending' ? "Cadastrando" : "Cadastrar"}</Button>
                            
                            {auth.signUpStatus === 'rejected' ? (<p>{auth.signUpError}</p>) : null}
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