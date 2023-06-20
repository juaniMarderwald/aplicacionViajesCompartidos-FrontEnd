import styled from "styled-components";

export const FormInput = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: var(--lightBlack);
  margin-bottom: 0.9rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  border: 1px solid var(--white);
  font-size: 14px;
  transition: all 0.3s ease-out;
  :focus,
  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 36px 36px 0px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
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

export const StyledLabel = styled.label`
  font-size: 15px;
`;

export const Button = styled.button`
  background-color: #1dc0d1;
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
