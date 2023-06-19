import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #faf8f8;
`;

export const NavBarWrapper = styled.div`
  margin: auto;
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
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");
  font-family: "Kanit";
  font-size: 1.5rem;
  color: #1dc0d1;
  text-decoration: none;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 98vh;
    position: absolute;
    top: 10px;
    left: ${({ click }) => (click ? 0 : "-120%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #faf8f8;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Kanit";
  font-weight: 400;

  &:hover {
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 70px;
  }
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  color: #1dc0d1;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: #313131;
  &:hover {
    transition: 0.3s ease-in;
    cursor: pointer;
    background-color: #efefef;
  }
`;
