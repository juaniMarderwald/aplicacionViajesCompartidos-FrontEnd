import React, { Fragment } from "react";
import { SearchElement } from "../SearchElement";
import carImage from "../../assets/carpool.svg";

import { BackgroundContainer } from "./style";

export const Contenido = () => {
    return (
        <BackgroundContainer>
            <SearchElement /> {/* Pasar prop para saber en que pagina puse el elemento. Por la posición  */}
{/*             <img src={carImage} alt="carpooling image" height="80%" width="100%" />
 */}            
        </BackgroundContainer>                  
    )
}
