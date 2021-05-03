import React, { ButtonHTMLAttributes, FC } from 'react';
import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  text: string;
}

const Button: FC<IButton> = ({ outline, text, ...rest }) => {
  return (
    <Container outline={outline} {...rest}>
      {text}
    </Container>
  );
};

export default Button;
