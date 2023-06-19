import React, { Fragment, useEffect, useState } from "react";
import { CardViaje } from "../CardViaje";

export function Viajeslist() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8080/viajes");
    //     if (!response.ok) {
    //       throw new Error("Error en la respuesta de la API");
    //     }
    //     const data = await response.json();
    //     setListData(data);
    //   } catch (error) {
    //     console.error("Error al obtener los datos:", error);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <Fragment>
      <p>Viajes List</p>
      {listData?.map((viaje, index) => (
        <CardViaje
          key={index}
          id={`${viaje?.id}`}
          ciudadInicio={`${viaje?.ciudadInicio}`}
          ciudadDestino={`${viaje?.ciudadDestino}`}
          horaSalida={`${viaje?.horaSalida}`}
          lugaresDisponibles={`${viaje?.lugaresDisponibles}`}
          conductor={viaje?.conductor}
          aceptaMascotas={`${viaje?.aceptaMascotas}`}
        />
      ))}
    </Fragment>
  );
}
