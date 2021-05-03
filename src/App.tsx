import React from 'react';
import Routes from 'routes';
import Header from 'components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from 'providers';
import GlobalStyle from 'styles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
    </Router>
  );
}

export default App;
