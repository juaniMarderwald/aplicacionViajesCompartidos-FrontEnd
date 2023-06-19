import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { MenuLinkButton } from "../common-components/button/Button";
import { FloatingDiv, Menu, MenuItem, MenuItemLink } from "./styles";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { selectedUserEmail } from "../../redux/selectors/user.selector";

// import { HiOutlineUser } from "react-icons/hi";

function LoginMenu() {
  const userEmail = useSelector(selectedUserEmail);

  const [click, setClick] = useState(false);
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);
  const floatingDivRef = useRef(null);

  const toggleFloatingDiv = () => {
    setShowFloatingDiv(!showFloatingDiv);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        floatingDivRef.current &&
        !floatingDivRef.current.contains(event.target)
      ) {
        setShowFloatingDiv(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Menu click={click}>
      <MenuItem
        onClick={() => {
          toggleFloatingDiv();
        }}
      >
        <MenuItemLink>
          <FaRegUserCircle size={30} />
          {userEmail}
          {showFloatingDiv ? (
            <SlArrowUp size={15} />
          ) : (
            <SlArrowDown size={15} />
          )}
        </MenuItemLink>
        <div ref={floatingDivRef}>
          <FloatingDiv show={showFloatingDiv}>
            <MenuLinkButton to="/login">Iniciar Sesion</MenuLinkButton>
            <MenuLinkButton to="/register">Registrarse</MenuLinkButton>
          </FloatingDiv>
        </div>
      </MenuItem>
    </Menu>
  );
}

export default LoginMenu;
