import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BotonInicio = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: none;
    height: 100px;
    text-decoration: none;
    color: inherit;  
    background-color: transparent;
    font-family: inherit;
    font-size: 20px;
    width: 30%;
    height: 20%;
    padding: 10px;
    border-radius: 10px;
    :hover{
        background-color: rgb(250, 248, 248);
        cursor: pointer;
        transition: 0.3s ease-in;
        color: #1D52E2;
        box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);      
        font-weight: bold;  
    }
`;

export const HorizontalLine = styled.div`
  border: none;
  border-top: 1px solid #E5E4E4;
  width: 30%;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
`;

export const LinkARegistrar = styled(Link)`
      text-decoration: none;   
      color : blue;
      cursor: pointer;
`;
