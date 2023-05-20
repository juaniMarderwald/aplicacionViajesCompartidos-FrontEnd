import React, { Fragment, useState } from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { BotonPasajero, ContainerAgregarPasajeros, ContainerNumeroPasajeros } from './style';

export const ContainerCantidadPasajeros = ({pasajeros,setPasajeros}) => {
    const addPasajeros = () => {
        if (pasajeros < 5) {
            setPasajeros(pasajeros + 1);
        }
    }

    const subtractPasajeros = () => {
        if (pasajeros > 1) {
            setPasajeros(pasajeros - 1);
        }
    }

    return (
        <Fragment>
            <ContainerAgregarPasajeros>
                Pasajeros
                <ContainerNumeroPasajeros>
                    <BotonPasajero onClick={() => { subtractPasajeros() }}><AiFillMinusCircle size={15} color='#1DC0D1' /></BotonPasajero>
                    {pasajeros}
                    <BotonPasajero onClick={() => { addPasajeros() }}><BsFillPlusCircleFill size={15} color='#1DC0D1' /></BotonPasajero>
                </ContainerNumeroPasajeros>
            </ContainerAgregarPasajeros>
        </Fragment>
    )
}