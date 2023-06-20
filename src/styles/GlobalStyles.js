import { createGlobalStyle, css } from "styled-components";

const theme = {
  primaryColor: "#1DC0D1",
  secondaryColor: "#1CA0C9",
  background: "#faf8f8",
  fontColor: "#313131",
  hoverColor: "#efefef",

  fontSizeTitle: "18px",
  fontSize: "16px",
  borderRadius: "4px",
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
