import React from 'react';
import Logo from './Logo';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo title="Auth App" />
    </StyledHeader>
  )
}

export default Header