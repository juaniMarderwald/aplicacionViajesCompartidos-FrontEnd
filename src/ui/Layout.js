import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/footer";
import { AppContainer } from "../AppStyle";

const Layout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main>
        <NavBar />
        <AppContainer>
          {children}
          <Footer />
        </AppContainer>
      </main>
    </div>
  );
};

export default Layout;
