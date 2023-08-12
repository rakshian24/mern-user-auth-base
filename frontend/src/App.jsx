import React from 'react';
import Home from './pages/home/Home';
import { styled } from 'styled-components';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

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
        <Routes>
          <Route path='/' element={<Home />}>
            <Route element={<SignUp />} index />
            <Route element={<SignIn />} path='sign-in' />
          </Route>
        </Routes>
      </AppContainer>
    </AppWrapper>
  )
}

export default App