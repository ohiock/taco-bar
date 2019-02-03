import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Drink from './icons/drink.svg';
import No from './icons/no.svg';

import BaseContainer from './BaseContainer';
import Icon from './Icon';

class DrinkSelector extends React.PureComponent<{
  handleSelection: (drink: boolean) => void;
}> {
  render() {
    return (
      <BaseContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>Would you like to add a drink?</h2>
            </div>
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={4}>
            <Link
              to="/confirmation"
              onClick={() => this.props.handleSelection(true)}
            >
              <div className="centered">
                <Icon src={Drink} />
                <h3>Yes - $1.25</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/confirmation"
              onClick={() => this.props.handleSelection(false)}
            >
              <div className="centered">
                <Icon src={No} />
                <h3>No</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </BaseContainer>
    );
  }
}

export default DrinkSelector;
