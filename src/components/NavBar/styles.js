import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 100%;
  /* box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2); */
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #FAF8F8;
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

`;

export const NavBarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 80%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;

export const IconLogo = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

  font-family: 'Kanit';
  font-size: 1.5rem;
  color: #1DC0D1;
  text-decoration: none;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;

  @media screen and (max-width:960px ) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top:10px;
    left: ${({click}) => click ? 0 : "-120%"};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color:#FAF8F8 ;
  }
`

export const MenuItem = styled.li`
  height: 100%;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Kanit';
  font-weight: 400;

  &:hover{
    /* background-color: antiquewhite;
    border-bottom: 0.3rem solid #1DC0D1; */
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  @media screen and (max-width: 960px){
    width: 100%;
    height: 70px;

  }
`

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: #1DC0D1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  margin: 0;
`;

export const IconLogoMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px){
    display: flex;
    color:#1DC0D1;
    font-size:1.5rem;
  }
`

export const FloatingDiv = styled.div`
  position: fixed;
  top:110px;
  left: 82%;
  transform: translate(-50%, -50%);
  background-color: #fff; 
  width: 280px; 
  height: 100px; 
  border-radius: 15px; 
  z-index: 9999; 
  display: ${({ show }) => (show ? 'block' : 'none')};
  transition: 0.2s ease-in;
/*   box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
 */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 36px 36px 0px;
 `;

export const Boton = styled(Link)`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #313131;
  &:hover{
    /* background-color: antiquewhite;
    border-bottom: 0.3rem solid #1DC0D1; */
    transition: 0.2s ease-in;
    cursor: pointer;
    background-color: #EFEFEF;
    border-radius: 10px;
  }
`;