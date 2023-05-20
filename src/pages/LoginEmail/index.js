import React, { Fragment } from 'react'
import { FormLoginElement } from '../../components/FormLoginElement'
import { ContainerPrincipal } from '../../AppStyle'

export const LoginEmailPage = () => {
    return (
        <Fragment >
            <ContainerPrincipal>
                <h1> ¿Recuerdas tu email y contraseña? </h1>
                <FormLoginElement />
            </ContainerPrincipal>
        </Fragment>
    )
}
