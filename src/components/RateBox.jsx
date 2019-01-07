import React, { Component } from 'react'
export default class RateBox extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.exSymbolValue !== this.props.exSymbolValue) {
      if(!this.props.disableInputBox && this.getInputValue()){
        document.getElementById('disabledBox').value = this.props.exSymbolValue.value.value * this.getInputValue();
      }
    }
  }

  getInputValue = () => {
    return document.getElementById('enabledBox').value;
  }

  setInputValue = (val) => {
    document.getElementById('enabledBox').value = val;
    if(!this.props.disableInputBox && document.getElementById('enabledBox').value){
      document.getElementById('disabledBox').value = this.props.exSymbolValue.value.value * this.getInputValue();
    }
  }

  handleKeyUp = (e) => {
    this.setInputValue(this.getInputValue())
  }

  render() {
    return (
      <div>
        <input maxLength="10" size="10" className={this.props.className} autoFocus
              id={this.props.inputBoxId} type="text" disabled={this.props.disableInputBox}
               ref={(input) => this.input = input}
               onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}