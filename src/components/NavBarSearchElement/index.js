import React, { Fragment } from "react";
import { Li, Ul } from "../NavBar/styles";
import { BiSearchAlt } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";

export const NavBarSearchElement = () => {
    return (
        <Fragment>
            <Ul>
                <div><BiSearchAlt size={40}/> Buscar </div>
                <GrAddCircle size={40}/>
                <FaRegUserCircle size={40}/>
            </Ul>
        </Fragment>
    )
}