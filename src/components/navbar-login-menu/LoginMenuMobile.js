import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { deleteToken } from "../../redux/slices/auth.slice";
import { deleteUser } from "../../redux/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectedIsAuth } from "../../redux/selectors/auth.selector";
import { FaRegUserCircle } from "react-icons/fa";
import { MenuItemLinkMobile } from "./styles";

export const LoginMenuMobile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectedIsAuth);
  const endSession = (event) => {
    event.preventDefault();
    dispatch(deleteToken());
    dispatch(deleteUser());
  };
  return (
    <>
      {isAuth ? (
        <MenuItemLinkMobile to="/" onClick={endSession}>
          <FaRegUserCircle size={16} />
          Cerrar sesión
        </MenuItemLinkMobile>
      ) : (
        <MenuItemLinkMobile to="/login">
          <HiOutlineUser size={16} />
          Ingresar
        </MenuItemLinkMobile>
      )}
    </>
  );
};
