import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div`
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

export const FloatingDiv = styled.div`
  position: fixed;
  top: 100px;
  width: 200px;
  height: 70px;
  padding: 2px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 9999;
  display: ${({ show }) => (show ? "block" : "none")};
  transition: 0.3s ease-in;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
`;
