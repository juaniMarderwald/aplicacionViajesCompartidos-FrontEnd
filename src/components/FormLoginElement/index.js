import React, { useState } from 'react'
import { StyledButton, StyledForm, StyledInput } from './styles'

export const FormLoginElement = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email,password);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChangeEmail}
                placeholder='Email'
            />

            <StyledInput
                type='text'
                id='password'
                name='password'
                value={password}
                onChange={handleChangePassword}
                placeholder='Password'
            />

            <StyledButton>
                Iniciar Sesión
            </StyledButton>

        </StyledForm>
    )
}
