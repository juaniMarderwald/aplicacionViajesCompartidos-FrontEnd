import React, { Fragment, useState } from 'react'
import { LinkALogin, RegisterContainer } from './style'
import { FormInput } from '../../components/FormLoginElement/styles'
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
            <h1>¿Cómo quieres registrarte?</h1>
            <BotonInicio>Registrase con Facebook <div><FaFacebook color='#1D52E2' size={20} /> <SlArrowRight size={15} /></div></BotonInicio>
            <BotonInicio to="/email-register">Registrarse con email <SlArrowRight size={15} /></BotonInicio>

            <p>¿Ya tienes una cuenta?<LinkALogin to="/login"> Iniciar Sesion </LinkALogin> </p>
        </RegisterContainer>
    )
}