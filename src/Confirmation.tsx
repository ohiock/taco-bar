import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Dinero from 'dinero.js';

import { AppState } from './App';
import BaseContainer from './BaseContainer';

const ConfirmationContainer = styled(BaseContainer)`
  .totals {
    margin: 25px 0;
  }

  a {
    margin: 10px;
  }

  a.link.complete {
    background: #ed553b;
  }
`;

class Confirmation extends React.Component<{
  selections: AppState;
  restartOrder: () => void;
}> {
  getPrice = (selection: string): Dinero.Dinero => {
    const prices: { [key: string]: Dinero.Dinero } = {
      Tacos: Dinero({ amount: 799 }),
      Burrito: Dinero({ amount: 899 }),
      Bowl: Dinero({ amount: 699 }),
      Drink: Dinero({ amount: 125 })
    };

    if (!prices[selection]) {
      return Dinero({ amount: 0 });
    }

    return prices[selection];
  };

  getSubtotal = (): Dinero.Dinero => {
    let subtotal = Dinero({ amount: 0 });

    subtotal = subtotal.add(this.getPrice(this.props.selections.item));

    if (this.props.selections.drink) {
      subtotal = subtotal.add(this.getPrice('Drink'));
    }

    return subtotal;
  };

  getTax = () => {
    const subtotal = this.getSubtotal();

    return subtotal.percentage(8.445);
  };

  getTotal = () => {
    return this.getSubtotal().add(this.getTax());
  };

  render() {
    return (
      <ConfirmationContainer>
        <Grid container>
          <Grid item xs={12}>
            <h2>Please confirm your order</h2>
          </Grid>
          <Row
            label={this.props.selections.item}
            price={this.getPrice(this.props.selections.item)}
          />
          <Row
            label={`- ${this.props.selections.meat}`}
            price={this.getPrice(this.props.selections.meat)}
          />
          <Row
            label={`- ${this.props.selections.salsa}`}
            price={this.getPrice(this.props.selections.salsa)}
          />
          {this.props.selections.drink && (
            <Row label="- Drink" price={this.getPrice('Drink')} />
          )}
          <Grid container item xs={12} className="totals">
            <Row label="Subtotal:" price={this.getSubtotal()} />
            <Row label="Tax (8.445%):" price={this.getTax()} />
            <Row label="Total:" price={this.getTotal()} />
          </Grid>
          <Grid item xs={12}>
            <Link to="/item" onClick={this.props.restartOrder} className="link">
              Restart
            </Link>
            <Link to="/complete" className="link complete">
              Complete Order
            </Link>
          </Grid>
        </Grid>
      </ConfirmationContainer>
    );
  }
}

const Row: React.FunctionComponent<{
  label: string;
  price: Dinero.Dinero;
}> = ({ label, price }) => (
  <>
    <Grid item xs={2}>
      {label}
    </Grid>
    <Grid item xs={2}>
      {price.toFormat('$0,0.00')}
    </Grid>
    <Grid item xs={8} />
  </>
);

export default Confirmation;
