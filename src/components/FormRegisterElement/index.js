import React, { useState } from "react";
import { StyledForm } from "../FormLoginElement/styles";
import { Button } from "../common-components/button/Button";
import { MyInput } from "../common-components/input/Input";

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
      <MyInput
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <MyInput
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <MyInput
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <Button>Registrarse</Button>
    </StyledForm>
  );
};
