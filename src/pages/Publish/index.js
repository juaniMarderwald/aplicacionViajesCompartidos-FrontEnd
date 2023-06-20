import React, { Fragment } from "react";
import {
  ButtonPublicar,
  CantidadPasajerosForm,
  CiudadForm,
  ImagenDeFondo,
  PublicarViajeContainer,
  PublicarViajeForm,
} from "./style";
import carPoolingImage from "../../assets/Carpooling-register.png";
import { CgShapeCircle } from "react-icons/cg";
import { CiUser } from "react-icons/ci";

export const PublicarViaje = () => {
  return (
    <PublicarViajeContainer>
      {/*             <ImagenDeFondo src={carPoolingImage} alt="carpooling" />*/}
      <h1>Ahorrá viajando con nosotros.</h1>
      <PublicarViajeForm>
        <CiudadForm>
          {" "}
          <CgShapeCircle /> Ciudad Inicio
        </CiudadForm>
        <CiudadForm>
          {" "}
          <CgShapeCircle /> Ciudad Destino
        </CiudadForm>
        <CantidadPasajerosForm>
          {" "}
          <CiUser /> 2 Pasajeros
        </CantidadPasajerosForm>
        <ButtonPublicar to="/register">Publicar Viaje</ButtonPublicar>
      </PublicarViajeForm>
    </PublicarViajeContainer>
  );
};
