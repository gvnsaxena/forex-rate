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
  }
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <UnitCurrenyDisplayBox currency={this.props.ExRateSymbols} exSymbolValue={this.props.FxSymbolValue}
          dispatch = {dispatch}/>
        <CurrencyBox inputBoxId="enabledBox" exSymbolValue={this.props.FxSymbolValue} 
          currency={this.props.ExRateSymbols} selectId="disabledSelect"
          disableSelectBox={true} disableInputBox={false} dispatch = {dispatch}/>
        <CurrencyBox inputBoxId="disabledBox" exSymbolValue={this.props.FxSymbolValue} 
          currency={this.props.ExRateSymbols} selectId="enabledSelect"
          disableSelectBox={false} disableInputBox={true} dispatch = {dispatch}/>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps)(ExchangePage)