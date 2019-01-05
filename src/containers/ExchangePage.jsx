import React, { Component } from 'react';
import CurrencyBox from './CurrencyBox.jsx';
import UnitCurrenyDisplayBox from './UnitCurrenyDisplayBox.jsx';

class ExchangePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <UnitCurrenyDisplayBox/>
        <CurrencyBox/>
        <CurrencyBox/>
      </div>
    )
  }
}

export default ExchangePage;