import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import ItemSelector from './ItemSelector';

const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Open+Sans');

  height: 100vh;
  padding: 25px;

  background: #f2b134;
  color: #ffffff;
  font-family: 'Open Sans', sans-serif;

  h1,
  h2,
  h3 {
    display: inline-block;
    padding: 10px 25px;

    background: #ed553b;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 3rem;
    transform: rotate(-2deg);
  }

  h2,
  h3 {
    padding: 5px 15px;

    background: #068587;
    font-size: 2rem;
    transform: none;
  }

  h3 {
    font-size: 1.5rem;
  }
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <BrowserRouter>
          <Route path="/" component={ItemSelector} />
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default App;
