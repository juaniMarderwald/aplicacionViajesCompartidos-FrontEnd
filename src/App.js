import React, { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Viajeslist } from './components/ViajesList';
import { NavBar } from './components/NavBar';
import { Contenido } from './components/Contenido';
import { Footer } from './components/footer';
import { ContainerPrincipal } from './AppStyle';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { BuscarPage } from './pages/Buscar';
import { PublicarViaje } from './pages/PublicarViaje';
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
import { SearchElement } from './components/SearchElement';
import { LoginEmailPage } from './pages/LoginEmail';
import { RegisterEmailPage } from './pages/RegisterEmail';
const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search-car-sharing" element={<BuscarPage />}></Route>
                    <Route path='/offer-seats' element={<PublicarViaje />}></Route>
                    <Route path='/email-login' element={<LoginEmailPage />}></Route>
                    <Route path='/email-register' element={<RegisterEmailPage />}></Route>
                    <Route path="/" element={
                        <Fragment>
                            <ContainerPrincipal>                               
                                <Contenido />
                            </ContainerPrincipal>
                            <Footer />
                        </Fragment>
                    } />
                    <Route path="/viajesDisponibles" element={
                        <ContainerPrincipal>
                            <h1>Viajes Disponibles: </h1>
                            <Viajeslist />
                        </ContainerPrincipal>
                    }></Route>

                </Routes>
            </BrowserRouter>
        </Fragment>
    );
};

export default App;