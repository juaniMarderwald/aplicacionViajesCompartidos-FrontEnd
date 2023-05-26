import React, { useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/slices/auth.slice";

export const FormLoginElement = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(formData));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <StyledInput
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <StyledButton>Iniciar Sesión</StyledButton>
    </StyledForm>
  );
};
