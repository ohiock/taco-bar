import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Taco from './icons/taco.svg';
import Burrito from './icons/burrito.svg';
import Bowl from './icons/bowl.svg';

const ItemSelectorContainer = styled.div`
  margin: 25px 0;

  .centered {
    text-align: center;
  }

  img {
    display: block;
    margin: auto;
    max-width: 50%;
    transform: rotate(10deg);
  }
`;

const ItemSelector: React.FunctionComponent = () => (
  <ItemSelectorContainer>
    <Grid container>
      <Grid item xs={12}>
        <div className="centered">
          <h2>What would you like to order?</h2>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="centered">
          <img src={Taco} />
          <h3>Taco! 7.99</h3>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="centered">
          <img src={Burrito} />
          <h3>Burrito! 8.99</h3>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="centered">
          <img src={Bowl} />
          <h3>Bowl! 6.99</h3>
        </div>
      </Grid>
    </Grid>
  </ItemSelectorContainer>
);

export default ItemSelector;
