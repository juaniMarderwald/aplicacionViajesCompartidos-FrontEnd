import React, { useState, useMemo } from "react";
import { IconLogo, IconLogoMobile, NavBarContainer } from "./styles";
import NavbarDesktop from "./navbarDesktop";
import { FaBars } from "react-icons/fa";
import NavbarMobile from "./navbarMobile";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  const ResponsiveComponent = useMemo(
    () => (isDesktop ? NavbarDesktop : NavbarMobile),
    [isDesktop]
  );

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <NavBarContainer>
      <IconLogo to="/">CARAVAN</IconLogo>

      <IconLogoMobile onClick={changeClick}>
        <FaBars />
      </IconLogoMobile>

      <ResponsiveComponent click={click} onClick={changeClick} />
    </NavBarContainer>
  );
};
