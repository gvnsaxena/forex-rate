import React, { Component } from 'react';
import CurrencyBox from './CurrencyBox.jsx';
import UnitCurrenyDisplayBox from './UnitCurrenyDisplayBox.jsx';
import { loadFxRate } from '../actions/action'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
class ExchangePage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadFxRate(this.props));
    setInterval( ()=>{ 
      dispatch(loadFxRate(this.props));
    }, 10000);
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <UnitCurrenyDisplayBox className="unit-currency-box"
          currency={this.props.ExRateSymbols} exSymbolValue={this.props.FxSymbolValue}
          dispatch = {dispatch}/>
        <CurrencyBox className="upper-currency-box" selectClassName="display-select" rateBoxClass="input-rate-box" inputBoxId="enabledBox" exSymbolValue={this.props.FxSymbolValue} 
          currency={this.props.ExRateSymbols} selectId="disabledSelect"
          disableSelectBox={true} disableInputBox={false} dispatch = {dispatch}/>
        <CurrencyBox rateBoxClass="display-rate-box" selectClassName="input-select" className="lower-currency-box" inputBoxId="disabledBox" exSymbolValue={this.props.FxSymbolValue} 
          currency={this.props.ExRateSymbols} selectId="enabledSelect"
          disableSelectBox={false} disableInputBox={true} dispatch = {dispatch}/>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(ExchangePage)