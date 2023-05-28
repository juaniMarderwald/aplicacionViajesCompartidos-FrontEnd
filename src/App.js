import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles, theme } from "./styles/GlobalStyles";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Suspense fallback={null}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
