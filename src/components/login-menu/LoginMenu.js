import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectedUser } from "../../redux/selectors/user.selector";
import { selectedIsAuth } from "../../redux/selectors/auth.selector";

import { LoginMenuOptions } from "./LoginMenuOptions";
import { FloatingDiv, ToLoginItem, MenuItemLink } from "./styles";

import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";

function LoginMenu() {
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);
  const isAuth = useSelector(selectedIsAuth);
  const userEmail = useSelector(selectedUser);
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

  const userIcon = isAuth ? (
    <FaRegUserCircle size={16} />
  ) : (
    <HiOutlineUser size={16} />
  );

  return (
    <div ref={floatingDivRef}>
      <ToLoginItem>
        <MenuItemLink onClick={toggleFloatingDiv}>
          {userIcon}
          {userEmail}
          {showFloatingDiv ? (
            <SlArrowDown size={13} />
          ) : (
            <SlArrowUp size={13} />
          )}
        </MenuItemLink>
      </ToLoginItem>
      <FloatingDiv show={showFloatingDiv} onClick={toggleFloatingDiv}>
        <LoginMenuOptions isAuth={isAuth} />
      </FloatingDiv>
    </div>
  );
}

export default LoginMenu;
