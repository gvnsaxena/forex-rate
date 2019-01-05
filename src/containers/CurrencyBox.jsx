import React, { Component } from 'react';
import CurrencyDropdown from '../components/CurrencyDropdown.jsx';
import Balance from '../components/Balance.jsx';
import RateBox from '../components/RateBox.jsx';

class CurrencyBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CurrencyDropdown/>
        <Balance/>
        <RateBox/>
      </div>
    )
  }
}

export default CurrencyBox;