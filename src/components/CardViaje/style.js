import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HoraSalida = styled.p`
  height: 15px;
  margin: 10px;
`;

export const Ciudad = styled.h1`
  height: 65px;
  margin: 5px;
  font-family: "Pathway Gothic One", "Kanit";
  font-size: 32px;
`;

export const LugaresDisponibles = styled.h1`
  height: 45px;
`;

export const CardViajeContainer = styled.div`
  height: 400px;
  width: 265px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 15px;
  font-size: 18px;
`;

export const BotonSumarseAViaje = styled(Link)`
  display: flex;
  background-color: #1dc0d1;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
  font-family: "Kanit";
  font-size: 25px;
  color: white;
  border-radius: 0 0px 10px 10px;
  text-decoration: none;

  :hover {
    background-color: #20b9b9;
  }
`;
