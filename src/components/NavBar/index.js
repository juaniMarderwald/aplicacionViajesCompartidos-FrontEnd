import React, { useState } from "react";
import LoginMenu from "../login-menu/LoginMenu";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavBarContainer,
} from "./styles";
import { BsSearch } from "react-icons/bs";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  };

  return (
    <NavBarContainer>
      <IconLogo to="/">CARAVAN</IconLogo>
      <IconLogoMobile onClick={changeClick}>
        {click ? <FaTimes /> : <FaBars />}
      </IconLogoMobile>
      <Menu click={click}>
        <MenuItemLink to="/search-car-sharing">
          <MenuItem onClick={changeClick}>
            <BsSearch size={16} />
            <p>Buscar</p>
          </MenuItem>
        </MenuItemLink>
        <MenuItemLink to="/offer-seats">
          <MenuItem onClick={changeClick}>
            <TbSquareRoundedPlus /> Publicar un Viaje
          </MenuItem>
        </MenuItemLink>
        <LoginMenu />
      </Menu>
    </NavBarContainer>
  );
};
