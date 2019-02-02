import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Steak from './icons/steak.svg';
import Chicken from './icons/chicken-leg.svg';
import No from './icons/no.svg';

import BaseContainer from './BaseContainer';
import Icon from './Icon';

class MeatSelector extends React.PureComponent<{
  handleSelection: (meat: string) => void;
}> {
  render() {
    return (
      <BaseContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>What kind of meat?</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/salsa"
              onClick={() => this.props.handleSelection('Beef')}
            >
              <div className="centered">
                <Icon src={Steak} />
                <h3>Beef</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/salsa"
              onClick={() => this.props.handleSelection('Chicken')}
            >
              <div className="centered">
                <Icon src={Chicken} />
                <h3>Chicken</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/salsa"
              onClick={() => this.props.handleSelection('No meat')}
            >
              <div className="centered">
                <Icon src={No} />
                <h3>No Meat</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </BaseContainer>
    );
  }
}

export default MeatSelector;
