import React, { Component } from 'react';
import { setFxValue } from '../actions/action'
import PropTypes from 'prop-types';
class CurrencyDropdown extends Component {
  componentDidUpdate(prevProps) {
      if(this.refs.disabledSelect){
        this.refs.disabledSelect.value = "USD";
      }
      if (prevProps.currency !== this.props.currency) {
        if(this.refs.enabledSelect){
          this.refs.enabledSelect.value = "GBP";
          this.props.dispatch(setFxValue(this.props.currency[this.refs.enabledSelect.value],
            this.refs.enabledSelect.value));
        }
      }
    }

  _onChange = () => {
      this.props.dispatch(setFxValue(this.props.currency[this.refs.enabledSelect.value],
        this.refs.enabledSelect.value));
  }
  render() {
    const { currency } = this.props;
    if(!currency){
      return null;
    }
    
    return (
      <div>
        <select className={this.props.selectClassName} ref={this.props.selectId} 
          id={this.props.selectId}
          disabled={this.props.disableSelectBox} 
          onChange={this._onChange}>
          {Object.keys(currency).map(function(n, id) { 
              return (<option key={n +"_"+id} value={n}>{n}</option>);
          })}
        </select>
      </div>
    )
  }
}

export default CurrencyDropdown;