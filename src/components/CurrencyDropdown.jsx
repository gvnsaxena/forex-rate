import React, { Component } from 'react';
import { setFxValue } from '../actions/action'
class CurrencyDropdown extends Component {
  componentDidUpdate(prevProps) {
      if(this.refs.disabledSelect){
        this.refs.disabledSelect.value = "USD";
      }
      if(this.refs.enabledSelect && !prevProps.currency){
        this.refs.enabledSelect.value = "GBP";
      }
      if(this.refs.enabledSelect){
        if (prevProps.currency !== this.props.currency) {
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