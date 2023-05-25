import React, { useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./styles";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/slices/user.slice";

export const FormLoginElement = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
      />

      <StyledInput
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
      />

      <StyledButton>Iniciar Sesión</StyledButton>
    </StyledForm>
  );
};
