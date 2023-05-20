import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchElementContainer = styled.div`
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    background-color: white;
    width: 60%;
    height: 60px;
    display: flex;
    @media screen and (max-width:960px ) {
        flex-direction: column;
        width: 50%;
        height: 300px;
    }
`;

export const SearchButton = styled(Link)`
    display: flex;
    background-color: #1DC0D1;
    width: 20%;
    border-radius: 0 10px 10px 0;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
    font-size: 30px;
    color: white;
    text-decoration: none;
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
    :hover{
        cursor: pointer;
    }
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

export const FloatingDivPasajeros = styled.div`
  position: fixed;
  top: 230px;
  left: 60%;
  transform: translate(-50%, -50%);
  background-color: #fff; 
  width: 250px; 
  height: 40px; 
  border-radius: 15px; 
  z-index: 9999; 
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: 0.5s ease-in;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 36px 36px 0px;
  border: none;
 `;
