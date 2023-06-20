import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { userLogin } from "../../redux/slices/auth.slice";
import { selectedIsAuth } from "../../redux/selectors/auth.selector";

import { StyledForm } from "./styles";
import { Button } from "../common-components/button/Button";
import { MyInput } from "../common-components/input/Input";

export const FormLoginElement = () => {
  const isAuth = useSelector(selectedIsAuth);
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

  // TODO: Mejorar
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <MyInput
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <MyInput
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <Button>Iniciar Sesión</Button>
    </StyledForm>
  );
};
