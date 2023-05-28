import {
  Home,
  Login,
  Register,
  BuscarPage,
  PublicarViaje,
  LoginEmailPage,
  RegisterEmailPage,
  Viajeslist,
} from "../pages";


// const lazyRegister = lazy(() =>
//   import(/* webpackChunkName: "LazyUsers" */ "../pages/Register")
// ); TODO: Revisar lazyLoading

export const routes = [
  {
    path: "/",
    element: Home,
    private: false,
  },
  {
    path: "/login",
    element: Login,
    private: false,
  },
  {
    path: "/register",
    element: Register,
    private: false,
  },
  {
    path: "/email-login",
    element: LoginEmailPage,
    private: false,
  },
  {
    path: "/email-register",
    element: RegisterEmailPage,
    private: false,
  },
  {
    path: "/search-car-sharing",
    element: BuscarPage,
    private: true,
  },
  {
    path: "/offer-seats",
    element: PublicarViaje,
    private: true,
  },
  {
    path: "/viajesDisponibles",
    element: Viajeslist,
    private: true,
  },
];
