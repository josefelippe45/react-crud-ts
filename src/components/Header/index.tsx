import React, { FC } from 'react';
import { Container } from './styles';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useHistory();
  const handleSignUp = () => {
    navigate.push('/register');
  };
  return (
    <Container>
      <Button outline onClick={handleSignUp} text="Sign up" />
    </Container>
  );
};

export default Header;
