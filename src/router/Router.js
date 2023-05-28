import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { BuscarPage } from "../pages/Buscar";
import { PublicarViaje } from "../pages/PublicarViaje";
import { LoginEmailPage } from "../pages/LoginEmail";
import { RegisterEmailPage } from "../pages/RegisterEmail";
import { ContainerPrincipal } from "../AppStyle";
import { Home } from "../components/Home";
import { Footer } from "../components/footer";
import { Viajeslist } from "../components/ViajesList";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export const Ruteo = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <ContainerPrincipal>
                <Home />
              </ContainerPrincipal>
              <Footer />
            </Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-car-sharing" element={<BuscarPage />}></Route>
        <Route path="/offer-seats" element={<PublicarViaje />}></Route>
        <Route path="/email-login" element={<LoginEmailPage />}></Route>
        <Route path="/email-register" element={<RegisterEmailPage />}></Route>

        <Route
          path="/viajesDisponibles"
          element={
            <ContainerPrincipal>
              <h1>Viajes Disponibles: </h1>
              <Viajeslist />
            </ContainerPrincipal>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
