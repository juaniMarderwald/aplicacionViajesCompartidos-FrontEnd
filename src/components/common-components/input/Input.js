import styled from "styled-components";

export const MyInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid #e5e4e4;
  background-color: #e5e4e4;
  margin: 10px;
  transition: all 0.3s ease-out;
  outline: 0;
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
