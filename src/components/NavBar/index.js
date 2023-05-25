import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../../redux/selectors/user.selector";
import {
  Boton,
  FloatingDiv,
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
// import { HiOutlineUser } from "react-icons/hi";
import { FaBars, FaTimes, FaRegUserCircle } from "react-icons/fa";
import { SlArrowRight, SlArrowDown, SlArrowUp } from "react-icons/sl";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [showFloatingDiv, setShowFloatingDiv] = useState(false);
  const userEmail = useSelector(selectUserEmail);

  const toggleFloatingDiv = () => {
    setShowFloatingDiv(!showFloatingDiv);
  };

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
            <MenuItem
              onClick={() => {
                toggleFloatingDiv();
              }}
            >
              {userEmail && <p>{userEmail}</p>}
              <MenuItemLink>
                <FaRegUserCircle size={30} />{" "}
                {showFloatingDiv ? (
                  <SlArrowUp size={15} />
                ) : (
                  <SlArrowDown size={15} />
                )}
              </MenuItemLink>
              <FloatingDiv show={showFloatingDiv}>
                <Boton to="/login">
                  Iniciar Sesion <SlArrowRight size={15} />
                </Boton>
                <Boton to="/register">
                  Registrarse <SlArrowRight size={15} />
                </Boton>
              </FloatingDiv>
            </MenuItem>
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </Fragment>
  );
};

{
  /*  <Ul>
                    <Li><StyledContainer>
                        <LogoElement>CARAVAN</LogoElement>
                    </StyledContainer>
                    </Li>
                    <Li>
                        <NavBarSearchElement />
                    </Li>
                </Ul> */
}
