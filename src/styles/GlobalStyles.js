import { createGlobalStyle, css } from "styled-components";

const theme = {
  primaryColor: "#1DC0D1",
  secondaryColor: "#1CA0C9",
  fontSize: "16px",
};

/* How to use css-variables:
     background-color: ${({ theme }) => theme.primaryColor};
*/

const GlobalStyles = createGlobalStyle`
    :root {
        ${({ theme }) =>
          css`
            --primary-color: ${theme.primaryColor};
            --secondary-color: ${theme.secondaryColor};
            --font-size: ${theme.fontSize};
          `}
      }
`;

export { theme, GlobalStyles };