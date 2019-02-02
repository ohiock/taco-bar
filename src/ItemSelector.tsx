import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Taco from './icons/taco.svg';
import Burrito from './icons/burrito.svg';
import Bowl from './icons/bowl.svg';

import Icon from './Icon';

const ItemSelectorContainer = styled.div`
  margin: 25px 0;

  h2 {
    margin-bottom: 50px;
  }

  a {
    color: inherit;

    &:hover {
      color: #dddddd;
    }
  }
`;

class ItemSelector extends React.PureComponent<{
  handleSelection: (item: string) => void;
}> {
  handleClick = (item: string) => {
    this.props.handleSelection(item);
  };

  render() {
    return (
      <ItemSelectorContainer>
        <Grid container>
          <Grid item xs={12}>
            <div className="centered">
              <h2>What would you like to order?</h2>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Link to="/meat" onClick={() => this.props.handleSelection('taco')}>
              <div className="centered">
                <Icon src={Taco} />
                <h3>Taco! 7.99</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/meat"
              onClick={() => this.props.handleSelection('burrito')}
            >
              <div className="centered">
                <Icon src={Burrito} />
                <h3>Burrito! 8.99</h3>
              </div>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/meat" onClick={() => this.props.handleSelection('bowl')}>
              <div className="centered">
                <Icon src={Bowl} />
                <h3>Bowl! 6.99</h3>
              </div>
            </Link>
          </Grid>
        </Grid>
      </ItemSelectorContainer>
    );
  }
}

export default ItemSelector;
