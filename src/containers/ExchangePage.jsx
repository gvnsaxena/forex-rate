import React, { Component } from 'react';
import CurrencyBox from './CurrencyBox.jsx';
import UnitCurrenyDisplayBox from './UnitCurrenyDisplayBox.jsx';
import { loadFxRate } from '../actions/action'
class ExchangePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    loadFxRate(this.props.store);
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