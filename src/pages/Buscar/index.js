import React, { Fragment } from 'react'
import { Elemento, SearchButton, SearchCantidadPasajeros, SearchCiudad, SearchContainer, SearchElement, SearchFecha } from './style'
import { CgShapeCircle } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { BsCalendar3 } from "react-icons/bs";

export const BuscarPage = () => {
    return (
        <Fragment>            
            <SearchContainer>
                <h1>¿A dónde querés ir?</h1>
                <SearchElement>
                    <SearchCiudad> <CgShapeCircle /> Ciudad Inicio</SearchCiudad>
                    <SearchCiudad> <CgShapeCircle /> Ciudad Destino</SearchCiudad>
                    <SearchFecha> <Elemento><BsCalendar3 size={15}/></Elemento> Hoy</SearchFecha>
                    <SearchCantidadPasajeros><CiUser /> 1</SearchCantidadPasajeros>
                    <SearchButton>Buscar</SearchButton>
                </SearchElement>
            </SearchContainer>
        </Fragment>

    )
}
