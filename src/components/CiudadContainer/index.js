import React, { Fragment } from 'react'
import { BottomCircle, InicioDestinoContainer, Line, LineContainer, TopCircle, Ciudades} from './style';

export const CiudadesContainer = ({ inicio, destino }) => {
    return (
        <Fragment>
            <InicioDestinoContainer>
                <LineContainer>
                    <Line />
                </LineContainer>
                <Ciudades>
                    <p>{inicio}</p>
                    <p>{destino}</p>
                </Ciudades>
            </InicioDestinoContainer>
        </Fragment>
    );
}