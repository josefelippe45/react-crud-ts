import React, { FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeProvider: FC = ({ children }) => (
  <StyledThemeProvider
    theme={{
      colors: {
        primary: '#161b28',
        secondary: '#ffff',
      },
    }}
  >
    {children}
  </StyledThemeProvider>
);
