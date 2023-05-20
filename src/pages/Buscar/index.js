import React, { Fragment, useState } from 'react'
import { SearchContainer  } from './style'
import { ContainerCantidadPasajeros } from '../../components/ContainerCantidadPasajeros';
import { SearchElement } from '../../components/SearchElement';

export const BuscarPage = () => {
    
    return (
        <Fragment>
            <SearchContainer>
                <h1>¿A dónde querés ir?</h1>
                <SearchElement />
            </SearchContainer>
        </Fragment>

    )
}
