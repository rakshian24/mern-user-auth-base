import React from 'react';
import { styled } from 'styled-components';

const LogoTitle = styled.div`
  font-size: 3rem;
  color: #0077c5;
`;

const Logo = ({ title }) => {
  return (
    <LogoTitle>{title}</LogoTitle>
  )
}

export default Logo