/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import Header from './Components/Navbar/Navbar';

const AppContainer = styled.div`
  margin: 3.5rem;
  padding: 1rem 1rem 0;
  font-family: 'Poppins', sans-serif;
  font-size: 0.938rem;
  background-color: #f9f6fd;
  color: #58555e;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
