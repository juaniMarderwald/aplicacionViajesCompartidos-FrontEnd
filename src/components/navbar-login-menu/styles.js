import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
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

export const ToLoginItem = styled.div`
  gap: 5px;
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
  width: 100%;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSizeTitle};
  text-decoration: none;
  font-weight: 400;
`;

export const MenuItemLinkMobile = styled(Link)`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSizeTitle};
  text-decoration: none;
  font-weight: 400;

  @media screen and (max-width: 760px) {
  }
`;

export const FloatingDiv = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 16vh;
  left: 95%;
  width: 150px;
  height: 70px;
  z-index: 9999;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize};
  padding: 5px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px 0px;
  transition: 0.3s ease-in;
  transform: translate(-50%, -50%);
`;
