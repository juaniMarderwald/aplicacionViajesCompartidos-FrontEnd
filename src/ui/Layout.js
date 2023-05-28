import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/footer";
import { AppContainer } from "../AppStyle";

const Layout = ({ children }) => {
  // const ResponsiveComponent = useMemo(()=> isMobile ? Desktop: Mobile );

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
