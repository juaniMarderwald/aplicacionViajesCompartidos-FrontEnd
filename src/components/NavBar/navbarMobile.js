import React from "react";
import { MenuNavbarMobileIcon } from "./styles";
import { Menu, MenuItem, MenuItemLink } from "./styles";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { LoginMenuMobile } from "../navbar-login-menu/LoginMenuMobile";

const NavbarMobile = ({ click, onClick }) => {
  return (
    <>
      <Menu click={click}>
        <MenuNavbarMobileIcon onClick={onClick}>
          <FaTimes />
        </MenuNavbarMobileIcon>
        <MenuItemLink to="/search-car-sharing">
          <MenuItem onClick={onClick}>
            <BsSearch size={16} />
            <p>Buscar</p>
          </MenuItem>
        </MenuItemLink>
        <MenuItemLink to="/offer-seats">
          <MenuItem onClick={onClick}>
            <TbSquareRoundedPlus />
            <p>Publicar un Viaje</p>
          </MenuItem>
        </MenuItemLink>
        <LoginMenuMobile onClick={onClick} />
      </Menu>
    </>
  );
};
export default NavbarMobile;
