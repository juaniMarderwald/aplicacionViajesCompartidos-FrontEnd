import React, { Fragment } from 'react'
import { Viajeslist } from '../../components/ViajesList'

export const ViajesDisponiblesPage = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/viajesDisponibles" element={
                            <Fragment>
                                <h1>Viajes Disponibles: </h1>
                                <Viajeslist />                    
                            </Fragment>
                        }></Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}
