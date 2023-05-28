import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userLogin } from "../../redux/slices/auth.slice";
import { userAuth } from "../../redux/selectors/auth.selector";

import { StyledButton, StyledForm, StyledInput } from "./styles";

export const FormLoginElement = () => {
  const isAuth = useSelector(userAuth);
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

  const navigate = useNavigate();
  useEffect(() => {
    console.log({ isAuth });
    isAuth && navigate("/");
  }, [isAuth]);

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
