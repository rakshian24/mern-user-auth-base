import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo';
import { useSignOutMutation } from '../slices/userApiSlice';
import { clearCredentials } from '../slices/authSlice';

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const SignOutText = styled.p`
  font-size: 1.75rem;
  cursor: pointer;
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut] = useSignOutMutation();

  const { userInfo } = useSelector((state) => state.auth);


  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      dispatch(clearCredentials());
      navigate('/sign-in');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledHeader>
      <Logo title="Auth App" />
      {userInfo && <SignOutText onClick={handleSignOut}>Sign out</SignOutText>}
    </StyledHeader>
  )
}

export default Header