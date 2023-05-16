import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Kanit';
`;

export const LinkARegistrar = styled(Link)`
      text-decoration: none;   
      color : blue;
      cursor: pointer;
`;