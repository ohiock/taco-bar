import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Onion from './icons/onion.svg';
import ChiliPepper from './icons/chili-pepper.svg';
import BellPepper from './icons/bell-pepper.svg';

import SelectorContainer from './SelectorContainer';
import Icon from './Icon';

class SalsaSelector extends React.PureComponent<{
  handleSelection: (salsa: string) => void;
}> {
  render() {
    return (
      <SelectorContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>What salsa would you like on your order?</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/drink"
              onClick={() => this.props.handleSelection('pico de gallo')}
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
              onClick={() => this.props.handleSelection('habanero devil sauce')}
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
              onClick={() => this.props.handleSelection('verde salsa')}
            >
              <div className="centered">
                <Icon src={BellPepper} />
                <h3>Verde Salsa</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </SelectorContainer>
    );
  }
}

export default SalsaSelector;
