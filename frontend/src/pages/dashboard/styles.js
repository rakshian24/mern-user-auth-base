import { styled } from 'styled-components';

export const DashboardContainer = styled.div`
  padding-top: 0;

  @media screen and (min-width: 1024px){
    padding-top: 1rem;
  }
`;

export const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  
  @media screen and (min-width: 501px) and (max-width: 1023px){
    font-size: 3rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 4rem;
  }
`;
