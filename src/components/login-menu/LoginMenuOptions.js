import React from "react";
import { useDispatch } from "react-redux";
import { deleteToken } from "../../redux/slices/auth.slice";
import { deleteUser } from "../../redux/slices/user.slice";
import { MenuLinkButton } from "../common-components/button/Button";

export const LoginMenuOptions = ({ isAuth }) => {
  const dispatch = useDispatch();

  const endSession = (event) => {
    event.preventDefault();
    dispatch(deleteToken());
    dispatch(deleteUser());
  };

  return (
    <>
      {isAuth ? (
        <>
          <MenuLinkButton to="/user-profile">Perfil</MenuLinkButton>
          <MenuLinkButton to="/login" onClick={endSession}>
            Cerrar Sesión
          </MenuLinkButton>
        </>
      ) : (
        <>
          <MenuLinkButton to="/login">Iniciar Sesion</MenuLinkButton>
          <MenuLinkButton to="/register">Registrarse</MenuLinkButton>
        </>
      )}
    </>
  );
};
