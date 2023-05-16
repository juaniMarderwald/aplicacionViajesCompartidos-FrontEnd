import React, { Fragment, useState } from 'react'
import { LinkALogin, RegisterContainer } from './style'
import { FormInput } from '../../components/form-input/styles'

export const Register = () => {
    const [inputsValue, setInputsValue] = useState({
        user: "",
        password: "",
    });

    return (
        <RegisterContainer>
            <h1>¿Cómo quieres registrarte?</h1>
            <FormInput
                name="user"
                placeholder="email"
                type="email"
                value={inputsValue.user}                
            />
            <FormInput
                name="password"
                placeholder="password"
                type="password"
                value={inputsValue.password}               
            />
            <p>¿Ya tienes una cuenta?<LinkALogin to="/login"> Iniciar Sesion </LinkALogin> </p>
        </RegisterContainer>
    )
}