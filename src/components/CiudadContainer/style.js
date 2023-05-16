import React from 'react'
import styled from 'styled-components'

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px; /* Ajusta la altura de la línea según tus necesidades */
  margin-right: 20px;
`;

export const Line = styled.div`
  position: relative;
  width: 3px; /* Ajusta el grosor de la línea según tus necesidades */
  height: 70px; /* Ajusta la altura de la línea según tus necesidades */
  background-color: #000; /* Ajusta el color de la línea según tus necesidades */
`;


export const InicioDestinoContainer =styled.div`
  display: flex;
`;

export const Ciudades = styled.div`
  display: flex;
  flex-direction: column;
`