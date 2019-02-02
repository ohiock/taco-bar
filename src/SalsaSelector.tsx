import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Onion from './icons/onion.svg';
import ChiliPepper from './icons/chili-pepper.svg';
import BellPepper from './icons/bell-pepper.svg';

import BaseContainer from './BaseContainer';
import Icon from './Icon';

class SalsaSelector extends React.PureComponent<{
  handleSelection: (salsa: string) => void;
}> {
  render() {
    return (
      <BaseContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>What kind of salsa?</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/drink"
              onClick={() => this.props.handleSelection('Pico de Gallo')}
            >
              <div className="centered">
                <Icon src={Onion} />
                <h3>Pico de Gallo</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/drink"
              onClick={() => this.props.handleSelection('Habanero Devil Sauce')}
            >
              <div className="centered">
                <Icon src={ChiliPepper} />
                <h3>Habanero Devil Sauce</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/drink"
              onClick={() => this.props.handleSelection('Verde Salsa')}
            >
              <div className="centered">
                <Icon src={BellPepper} />
                <h3>Verde Salsa</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </BaseContainer>
    );
  }
}

export default SalsaSelector;
