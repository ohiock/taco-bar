import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Confirmation from './Confirmation';

const WrapperConfirmation = (props: any) => (
  <MemoryRouter>
    <Confirmation {...props} />
  </MemoryRouter>
);

describe('<Confirmation /> Tacos & Drink', () => {
  let wrapper: Cheerio;

  beforeEach(() => {
    wrapper = render(
      <WrapperConfirmation
        restartOrder={() => {}}
        selections={{
          item: 'Tacos',
          meat: 'Chicken',
          salsa: 'Pico de Gallo',
          drink: true
        }}
      />
    );
  });

  it('Correctly calculates the subtotal', () => {
    expect(wrapper.find('.subtotal-container').text()).to.contain('$9.24');
  });

  it('Correctly calculates the tax', () => {
    expect(wrapper.find('.tax-container').text()).to.contain('$0.78');
  });

  it('Correctly calculates the grand total', () => {
    expect(wrapper.find('.total-container').text()).to.contain('$10.02');
  });
});

describe('<Confirmation /> Burrito & No Drink', () => {
  let wrapper: Cheerio;

  beforeEach(() => {
    wrapper = render(
      <WrapperConfirmation
        restartOrder={() => {}}
        selections={{
          item: 'Burrito',
          meat: 'Beef',
          salsa: 'Verde Salsa',
          drink: false
        }}
      />
    );
  });

  it('Correctly calculates the subtotal', () => {
    expect(wrapper.find('.subtotal-container').text()).to.contain('$8.99');
  });

  it('Correctly calculates the tax', () => {
    expect(wrapper.find('.tax-container').text()).to.contain('$0.76');
  });

  it('Correctly calculates the grand total', () => {
    expect(wrapper.find('.total-container').text()).to.contain('$9.75');
  });
});
