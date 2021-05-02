import React, { FC } from 'react';
import { Container } from './styles';

interface IButton {
  outline?: boolean;
}

const Button: FC<IButton> = ({ outline, children }) => {
  return <Container outline={outline}>{children}</Container>;
};

export default Button;
