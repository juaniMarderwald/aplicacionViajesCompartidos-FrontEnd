import React from 'react'
import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    flex-wrap: wrap;
`;

export const SearchElement = styled.div`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    width: 60%;
    height: 60px;
    display: flex;
    @media screen and (max-width:960px ) {
        flex-direction: column;
        width: 50%;
        height: 300px;
    }
    
    
`;

export const SearchButton = styled.div`
    display: flex;
    background-color: #1DC0D1;
    width: 20%;
    border-radius: 0 10px 10px 0;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 30px;
    color: white;
    @media screen and (max-width:960px ) {
        width: 100%;
        height: 20%;
        border-radius: 0 0px 10px 10px;
    }
`;

export const SearchCiudad = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 20px;
    width: 25%;
    border-right: 1px solid #E5E4E4;
    @media screen and (max-width:960px ) {
        width: 100%;
        height: 30%;
        border-bottom: 1px solid #E5E4E4;

    }
`

export const SearchFecha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 20px;
    width: 20%;
    border-right: 1px solid #E5E4E4;
    @media screen and (max-width:960px ) {
        width: 100%;
        height: 20%;
    }
`

export const SearchCantidadPasajeros = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 20px;
    width: 10%;
    @media screen and (max-width:960px ) {
        width: 100%;
        height: 10%;
    }
    
`

export const Elemento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin:10px;
`;
