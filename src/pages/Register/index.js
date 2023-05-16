import React, { Fragment, useState } from 'react'
import { LinkALogin, RegisterContainer } from './style'
import { FormInput } from '../../components/form-input/styles'
import { BotonInicio } from '../Login/style';
import { FaFacebook } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

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
            {/* 
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
             
            /> */}
            <h1>¿Cómo quieres registrarte?</h1>
            <BotonInicio>Registrase con Facebook <div><FaFacebook color='#1D52E2' size={20} /> <SlArrowRight size={15} /></div></BotonInicio>
            <BotonInicio>Registrarse con email <SlArrowRight size={15} /></BotonInicio>

            <p>¿Ya tienes una cuenta?<LinkALogin to="/login"> Iniciar Sesion </LinkALogin> </p>
        </RegisterContainer>
    )
}