import React, { FC } from 'react';
import { Container } from './styles';
import Button from 'components/Button';
import { useHistory, useLocation } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useHistory();
  const location = useLocation();

  const handleSignUp = () => {
    navigate.push('/register');
  };
  const handleSignIn = () => {
    navigate.push('/login');
  };
  return (
    <Container>
      {(location.pathname === '/' ||
        location.pathname === '/register' ||
        location.pathname === '/login') && (
        <>
          <Button onClick={handleSignIn} text="Sign in" />
          <Button outline onClick={handleSignUp} text="Sign up" />
        </>
      )}
    </Container>
  );
};

export default Header;
