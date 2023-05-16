import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PublicarViajeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    font-family: 'Kanit';
`;

export const ImagenDeFondo = styled.img`
   height: 80%;
`;

export const PublicarViajeForm = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    width: 40%;
    height: 300px;
`

export const CiudadForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 20px;
    width: 100%;
    height: 30%;
    border-bottom: 1px solid #E5E4E4;
`;

export const CantidadPasajerosForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 20px;
    width: 100%;
    height: 20%;    
`;

export const ButtonPublicar = styled(Link)`
    display: flex;
    background-color: #1DC0D1;
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 30px;
    color: white;    
    border-radius: 0 0px 10px 10px;
    text-decoration: none;

    :hover{
        background-color: #20B9B9;
    }   
`;