import React, { Fragment, useState } from 'react'
import { LinkALogin, RegisterContainer } from './style'
import { FormInput } from '../../components/form-input/styles'

export const Register = () => {
    const [inputsValue, setInputsValue] = useState({
        user: "",
        password: "",
    });

    const handleInputs = (e) => {
        setInputsValue((prev) => {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        });
      };

    return (
        <RegisterContainer>
            <h1>¿Cómo quieres registrarte?</h1>
            <FormInput
                name="user"
                placeholder="email"
                type="email"
                value={inputsValue.user}
                onChange={handleInputs}
                
            />
            <FormInput
                name="password"
                placeholder="password"
                type="password"
                value={inputsValue.password}  
                onChange={handleInputs}
             
            />
            <p>¿Ya tienes una cuenta?<LinkALogin to="/login"> Iniciar Sesion </LinkALogin> </p>
        </RegisterContainer>
    )
}