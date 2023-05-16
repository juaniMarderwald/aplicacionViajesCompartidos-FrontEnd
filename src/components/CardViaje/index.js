import React, { Fragment } from "react";
import { BotonSumarseAViaje, CardViajeContainer, Ciudad, HoraSalida, LugaresDisponibles } from "./style";
import { ConductorContainer } from "../ConductorContainer";
import { CiudadesContainer } from "../CiudadContainer";

export const CardViaje = ({
    id,
    ciudadInicio,
    ciudadDestino,
    horaSalida,
    lugaresDisponibles,
    conductor,
    aceptaMascotas
})=>{    
    const viaje = {
        id:`${id}`,
        ciudadInicio:`${ ciudadInicio }`,
        ciudadDestino:`${ciudadDestino }`,
        horaSalida: `${horaSalida }`,
        lugaresDisponibles: `${lugaresDisponibles }`,
        conductor: `${conductor}`,
        aceptaMascotas: `${aceptaMascotas }`
    };

    return (
        <CardViajeContainer>
            <CiudadesContainer inicio={ciudadInicio} destino={ciudadDestino}></CiudadesContainer>            
            <HoraSalida>{`Hora de Salida: ${viaje?.horaSalida}`}</HoraSalida>
            <LugaresDisponibles>{`Lugares: ${viaje?.lugaresDisponibles}`}</LugaresDisponibles>
            <ConductorContainer datosConductor = {conductor}/>
            <BotonSumarseAViaje>Quiero Sumarme</BotonSumarseAViaje>
        </CardViajeContainer>
    );
}