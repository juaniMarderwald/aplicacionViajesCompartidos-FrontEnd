import React, { Fragment, useState } from 'react'
import { Elemento, FloatingDivPasajeros, SearchButton, SearchCantidadPasajeros, SearchCiudad, SearchContainer, SearchElement, SearchFecha } from './style'
import { CgShapeCircle } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

export const BuscarPage = () => {

    const [showFloatingDiv, setShowFloatingDiv] = useState(false);

    const toggleFloatingDiv = () => {
        setShowFloatingDiv(!showFloatingDiv);
    };


    return (
        <Fragment>
            <SearchContainer>
                <h1>¿A dónde querés ir?</h1>
                <SearchElement>
                    <SearchCiudad> <CgShapeCircle /> Ciudad Inicio</SearchCiudad>
                    <SearchCiudad> <CgShapeCircle /> Ciudad Destino</SearchCiudad>
                    <SearchFecha> <Elemento><BsCalendar3 size={15} /></Elemento> Hoy</SearchFecha>
                    <SearchCantidadPasajeros onClick={() => { toggleFloatingDiv() }} >
                        <CiUser /> 1
                    </SearchCantidadPasajeros>
                    <FloatingDivPasajeros show={showFloatingDiv}> Pasajeros <AiFillMinusCircle /> 1 <BsFillPlusCircleFill /> </FloatingDivPasajeros>
                    <SearchButton to="/viajesDisponibles">Buscar</SearchButton>
                </SearchElement>
            </SearchContainer>
        </Fragment>

    )
}
