import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const HeaderContainer = styled.div`
  text-align: center;
`;

const Header: React.FunctionComponent = () => (
  <HeaderContainer>
    <Grid container>
      <Grid item xs={12}>
        <h1>Welcome to Nicu's Taco Shack!</h1>
      </Grid>
    </Grid>
  </HeaderContainer>
);

export default Header;
