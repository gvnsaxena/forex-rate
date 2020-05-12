import React, { Component } from 'react';
import CurrencyDropdown from '../components/CurrencyDropdown.jsx';
import RateBox from '../components/RateBox.jsx';
import PropTypes from 'prop-types';
class CurrencyBox extends Component {
  static propTypes = {
    currency: PropTypes.object
  }
  render() {
    const { currency } = this.props;
    if(!currency){
      return null;
    }
    return (
      <div className={this.props.className}>
        <CurrencyDropdown dispatch={this.props.dispatch} selectClassName={this.props.selectClassName}
          disableSelectBox={this.props.disableSelectBox} 
          currency={currency.rates} selectId={this.props.selectId}/>
        <RateBox className={this.props.rateBoxClass} exSymbolValue={this.props.exSymbolValue} inputBoxId={this.props.inputBoxId} 
          disableInputBox={this.props.disableInputBox} 
          selectId={this.props.selectId}/>
      </div>
    )
  }
}

export default CurrencyBox;