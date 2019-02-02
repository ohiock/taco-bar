import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Steak from './icons/steak.svg';
import Chicken from './icons/chicken-leg.svg';
import No from './icons/no.svg';

import Icon from './Icon';

const MeatSelectorContainer = styled.div`
  margin: 25px 0;

  h2 {
    margin-bottom: 50px;
  }
`;

class MeatSelector extends React.PureComponent<{
  handleSelection: (meat: string) => void;
}> {
  render() {
    return (
      <MeatSelectorContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>What meat would you like on your order?</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/salsa"
              onClick={() => this.props.handleSelection('steak')}
            >
              <div className="centered">
                <Icon src={Steak} />
                <h3>Steak</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/salsa"
              onClick={() => this.props.handleSelection('chicken')}
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
              onClick={() => this.props.handleSelection('none')}
            >
              <div className="centered">
                <Icon src={No} />
                <h3>No Meat</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </MeatSelectorContainer>
    );
  }
}

export default MeatSelector;
