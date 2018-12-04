import React from 'react';
import {observer} from 'mobx-react';

export default @observer class VariableInputs extends React.Component {
  render() {
    return (
      <div className={`VariableInputs ${this.props.classes}`}>
      </div>
    )
  }
}
