import React, { FC } from 'react';
import { Container } from './styles';

interface IButton {
  outline?: boolean;
  text: string;
  onClick?: (arg: any) => void;
}

const Button: FC<IButton> = ({ outline, text, onClick, ...rest }) => {
  return (
    <Container outline={outline} onClick={onClick}>
      {text}
    </Container>
  );
};

export default Button;
