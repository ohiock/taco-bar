import React, { Component } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;

  font-family: sans-serif;
`;

class App extends Component {
  render() {
    return <AppContainer>This is the app</AppContainer>;
  }
}

export default App;
