import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kanit";
  font-size: ${({ theme }) => theme.fontSize};
  padding: 10px;
  margin: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  border: none;
`;

export const MenuLinkButton = styled(Link)`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};

  &:hover {
    background-color: ${({ theme }) => theme.hoverColor};
    transition: 0.3s ease-in;
    cursor: pointer;
  }
`;
