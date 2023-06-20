import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  max-width: 100%;
  height: 8vh;
  padding: 0.5em;
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
`;

export const IconLogo = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 10px;
    left: ${({ click }) => (click ? 0 : "-120%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: ${({ theme }) => theme.background};
  }
`;

export const MenuItemLink = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSizeTitle};
  text-decoration: none;
  font-weight: 400;
`;

export const MenuItem = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.5rem;

  &:hover {
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 70px;
  }
`;

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

  @media screen and (max-width: 760px) {
    display: flex;
    color: #1dc0d1;
    font-size: 1.5rem;
  }
`;

export const Boton = styled(Link)`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  &:hover {
    transition: 0.3s ease-in;
    cursor: pointer;
    background-color: ${({ theme }) => theme.background};
  }
`;
