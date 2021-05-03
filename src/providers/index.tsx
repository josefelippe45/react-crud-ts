import React, { FC } from 'react';
import { ThemeProvider } from './theme';

const AppProvider: FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
