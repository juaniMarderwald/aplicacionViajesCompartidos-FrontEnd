import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { deleteToken } from "../../redux/slices/auth.slice";
import { deleteUser } from "../../redux/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectedIsAuth } from "../../redux/selectors/auth.selector";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuItemLinkMobile } from "./styles";
import { MenuItem } from "../navBar/styles";

export const LoginMenuMobile = ({ onClick }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectedIsAuth);
  const endSession = (event) => {
    event.preventDefault();
    dispatch(deleteToken());
    dispatch(deleteUser());
    onClick();
  };
  return (
    <>
      {isAuth ? (
        <MenuItemLinkMobile onClick={endSession}>
          <MenuItem to="/">
            <FaRegUserCircle size={16} />
            <p>Cerrar sesión</p>
          </MenuItem>
        </MenuItemLinkMobile>
      ) : (
        <MenuItemLinkMobile onClick={onClick}>
          <MenuItem to="/login">
            <HiOutlineUser size={16} />
            <p>Ingresar</p>
          </MenuItem>
        </MenuItemLinkMobile>
      )}
    </>
  );
};
