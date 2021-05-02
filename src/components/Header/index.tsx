import React, { FC } from 'react';
import { Container } from './styles';
import Button from 'components/Button';

const Header: FC = () => {
  return (
    <Container>
      <Button outline>Sign up</Button>
    </Container>
  );
};

export default Header;
