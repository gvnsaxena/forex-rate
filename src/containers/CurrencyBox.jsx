import React, { Component } from 'react';
import CurrencyDropdown from '../components/CurrencyDropdown.jsx';
import RateBox from '../components/RateBox.jsx';
class CurrencyBox extends Component {
  render() {
    return (
      <div>
        <CurrencyDropdown dispatch={this.props.dispatch} 
          disableSelectBox={this.props.disableSelectBox} 
          currency={this.props.currency.rates} selectId={this.props.selectId}/>
        <RateBox exSymbolValue={this.props.exSymbolValue} inputBoxId={this.props.inputBoxId} 
          disableInputBox={this.props.disableInputBox} 
          selectId={this.props.selectId}/>
      </div>
    )
  }
}

export default CurrencyBox;