import React from "react";
import { BackgroundContainer } from "./style";
import { SearchElement } from "../../components/SearchElement";

export const Home = () => {
  return (
    <BackgroundContainer>
      <SearchElement />
      {/* Pasar prop para saber en que pagina puse el elemento. Por la posición  */}
      {/*             <img src={carImage} alt="carpooling image" height="80%" width="100%" />
       */}
    </BackgroundContainer>
  );
};
