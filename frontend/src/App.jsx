import React from 'react';
import Home from './pages/home/Home';
import { styled } from 'styled-components';
import Header from './components/Header';

const AppWrapper = styled.div`
  height: 100vh;
`;

const AppContainer = styled.div`
  height: calc(100vh - 6rem);
  overflow-y: scroll;
  padding: 2rem 4rem;

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <AppContainer>
        <Home />
      </AppContainer>
    </AppWrapper>
  )
}

export default App