import React, { Component } from 'react'

class UnitCurrenyDisplayBox extends Component {

  render() {
    if(!this.props.exSymbolValue.value){
      return null;
    }
    return (
      <div className={this.props.className}>
        <p>USD 1 = {this.props.exSymbolValue.value.requiredFields} {this.props.exSymbolValue.value.value}</p>
      </div>
    )
  }
}

export default UnitCurrenyDisplayBox;
