import React from "react";
import LoginMenu from "../navbar-login-menu/LoginMenu";
import { Menu, MenuItem, MenuItemLink } from "./styles";
import { BsSearch } from "react-icons/bs";
import { TbSquareRoundedPlus } from "react-icons/tb";

const NavbarDesktop = ({ onClick }) => {
  return (
    <Menu>
      <MenuItemLink to="/search-car-sharing">
        <MenuItem onClick={onClick}>
          <BsSearch size={16} />
          <p>Buscar</p>
        </MenuItem>
      </MenuItemLink>
      <MenuItemLink to="/offer-seats">
        <MenuItem onClick={onClick}>
          <TbSquareRoundedPlus /> Publicar un Viaje
        </MenuItem>
      </MenuItemLink>
      <LoginMenu />
    </Menu>
  );
};

export default NavbarDesktop;
