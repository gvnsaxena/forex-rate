import React, { Component } from 'react';
import { setFxValue } from '../actions/action'
import PropTypes from 'prop-types';
class CurrencyDropdown extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }
  componentDidUpdate(prevProps) {
      if(document.getElementById('disabledSelect')){
        document.getElementById('disabledSelect').value = "USD";
      }
      if (prevProps.currency !== this.props.currency) {
        if(document.getElementById('enabledSelect')){
          this.props.dispatch(setFxValue(this.props.currency[document.getElementById('enabledSelect').value],
          document.getElementById('enabledSelect').value));
        }
      }
    }

  _onChange = () => {
    if(document.getElementById('enabledSelect')){
      this.props.dispatch(setFxValue(this.props.currency[document.getElementById('enabledSelect').value],
      document.getElementById('enabledSelect').value));
    }
  }
  render() {
    const { currency } = this.props;
    if(!currency){
      return null;
    }
    
    return (
      <div >
        <select id={this.props.selectId} disabled={this.props.disableSelectBox} 
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