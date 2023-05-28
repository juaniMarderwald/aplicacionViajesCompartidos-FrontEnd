import React, { Fragment } from "react";
import { BotonInicio, LinkARegistrar, LoginContainer } from "./style";
import { FaFacebook } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

export const Login = () => {
  return (
    <Fragment>
      <LoginContainer>
        <h1> Ahorra viajando con nosotros </h1>
        <BotonInicio>
          Inicia Sesión con Facebook{" "}
          <div>
            <FaFacebook color="#1D52E2" size={20} /> <SlArrowRight size={15} />
          </div>
        </BotonInicio>
        <BotonInicio to="/email-login">
          Inicia Sesión con email <SlArrowRight size={15} />
        </BotonInicio>
        <p>
          ¿No tienes una cuenta?{" "}
          <LinkARegistrar to="/register">Registrarte</LinkARegistrar>{" "}
        </p>
      </LoginContainer>
    </Fragment>
  );
};
