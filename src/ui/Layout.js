import React from "react";
import { NavBar } from "../components/navBar/navbarContainer";
import { Footer } from "../components/footer";
import { AppContainer } from "../AppStyle";

const Layout = ({ children }) => {
  return (
    <main>
      <NavBar />
      <AppContainer>
        {children}
        <Footer />
      </AppContainer>
    </main>
  );
};

export default Layout;
