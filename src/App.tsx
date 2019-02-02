import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import ItemSelector from './ItemSelector';
import MeatSelector from './MeatSelector';
import SalsaSelector from './SalsaSelector';
import DrinkSelector from './DrinkSelector';

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

  a {
    color: inherit;
    text-decoration: none;
  }

  .centered {
    text-align: center;
  }
`;

interface AppState {
  item: string;
  meat: string;
  salsa: string;
  drink: boolean;
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
  }

  handleItemSelection = (item: string) => {
    this.setState({ item });
  };

  handleMeatSelection = (meat: string) => {
    this.setState({ meat });
  };

  handleSalsaSelection = (salsa: string) => {
    this.setState({ salsa });
  };

  handleDrinkSelection = (drink: boolean) => {
    this.setState({ drink });
  };

  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <>
            <Link to="/">
              <Header />
            </Link>
            <Route path="/" exact render={() => <StartPage />} />
            <Route
              path="/item"
              render={() => (
                <ItemSelector handleSelection={this.handleItemSelection} />
              )}
            />
            <Route
              path="/meat"
              render={() => (
                <MeatSelector handleSelection={this.handleMeatSelection} />
              )}
            />
            <Route
              path="/salsa"
              render={() => (
                <SalsaSelector handleSelection={this.handleSalsaSelection} />
              )}
            />
            <Route
              path="/drink"
              render={() => (
                <DrinkSelector handleSelection={this.handleDrinkSelection} />
              )}
            />
          </>
        </BrowserRouter>
      </AppContainer>
    );
  }
}

const StartPage: React.FunctionComponent = () => (
  <div className="centered">
    <Link to="/item">
      <h3>Place an order</h3>
    </Link>
  </div>
);

export default App;
