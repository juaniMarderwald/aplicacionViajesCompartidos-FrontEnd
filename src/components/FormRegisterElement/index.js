import React, { useState } from 'react'
import { StyledButton, StyledForm, StyledInput } from '../FormLoginElement/styles';

export const FormRegisterElement = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData.username, formData.email, formData.password);
    };


    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                id='username'
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
            />
            <StyledInput
                type="email"
                id='email'
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <StyledInput
                type="password"
                id='password'
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
            />

            <StyledButton>
                Registrarse
            </StyledButton>

        </StyledForm>
    )
}

