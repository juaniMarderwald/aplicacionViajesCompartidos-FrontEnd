import React, { Fragment, useState } from "react";
import {
  Elemento,
  FloatingDivPasajeros,
  SearchButton,
  SearchCantidadPasajeros,
  SearchCiudad,
  SearchElementContainer,
  SearchFecha,
} from "./style";
import { ContainerCantidadPasajeros } from "../ContainerCantidadPasajeros";
import { CgShapeCircle } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";

export const SearchElement = () => {
  const [numeroPasajeros, setNumeroPasajeros] = useState(1);
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);

  const toggleFloatingDiv = () => {
    setShowFloatingDiv(!showFloatingDiv);
  };

  return (
    <Fragment>
      <SearchElementContainer>
        <SearchCiudad>
          {" "}
          <CgShapeCircle /> Ciudad Inicio
        </SearchCiudad>
        <SearchCiudad>
          {" "}
          <CgShapeCircle /> Ciudad Destino
        </SearchCiudad>
        <SearchFecha>
          {" "}
          <Elemento>
            <BsCalendar3 size={15} />
          </Elemento>{" "}
          Hoy
        </SearchFecha>
        <SearchCantidadPasajeros
          onClick={() => {
            toggleFloatingDiv();
          }}
        >
          <CiUser /> {numeroPasajeros}
        </SearchCantidadPasajeros>
        <FloatingDivPasajeros show={showFloatingDiv}>
          <ContainerCantidadPasajeros
            pasajeros={numeroPasajeros}
            setPasajeros={setNumeroPasajeros}
          />
        </FloatingDivPasajeros>
        <SearchButton to="/viajesDisponibles">Buscar</SearchButton>
      </SearchElementContainer>
    </Fragment>
  );
};
