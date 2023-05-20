import React from 'react'
import styled from "styled-components";

export const ContainerAgregarPasajeros = styled.div`
    padding-left: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerNumeroPasajeros = styled.div`
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const BotonPasajero = styled.button`
    margin: 5px;
    text-decoration:none;
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`