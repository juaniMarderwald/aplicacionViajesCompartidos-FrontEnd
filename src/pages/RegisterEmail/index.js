import React, { Fragment } from 'react'
import { FormRegisterElement } from '../../components/FormRegisterElement'
import { ContainerPrincipal } from '../../AppStyle'

export const RegisterEmailPage = () => {
    return(
        <Fragment >
        <ContainerPrincipal>
            <h1> Ingresa tus datos para registrarte </h1>
            <FormRegisterElement />
        </ContainerPrincipal>
    </Fragment>
    )
}
