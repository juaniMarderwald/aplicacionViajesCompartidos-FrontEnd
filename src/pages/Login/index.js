import React, { Fragment } from 'react'
import { LinkARegistrar, LoginContainer } from './style'

export const Login = () =>{
    return(
        <LoginContainer>
            <h1>¿Cómo quieres iniciar sesión?</h1>
            <p>¿No tienes cuenta? <LinkARegistrar to="/register"> Registrarse </LinkARegistrar> </p>
        </LoginContainer>
    )
}