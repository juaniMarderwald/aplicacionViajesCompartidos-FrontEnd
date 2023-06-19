import React, { Fragment, useState } from "react";
import LoginMenu from "../login-menu/LoginMenu";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavBarContainer,
  NavBarWrapper,
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
    <Fragment>
      <NavBarContainer>
        <NavBarWrapper>
          <IconLogo to="/">CARAVAN</IconLogo>
          <IconLogoMobile
            onClick={() => {
              changeClick();
            }}
          >
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu click={click}>
            <MenuItem
              onClick={() => {
                changeClick();
              }}
            >
              <MenuItemLink to="/search-car-sharing">
                <BsSearch size={20} /> Buscar
              </MenuItemLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                changeClick();
              }}
            >
              <MenuItemLink to="/offer-seats">
                <TbSquareRoundedPlus /> Publicar un Viaje
              </MenuItemLink>
            </MenuItem>
            <LoginMenu />
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </Fragment>
  );
};
