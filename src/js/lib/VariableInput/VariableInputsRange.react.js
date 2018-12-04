import React from 'react';
import {observer} from 'mobx-react';

export default @observer class VariableInputsRange extends React.Component {
  render() {
    return (
      <div className={`VariableInputsRange ${this.props.classes}`}>
      </div>
    )
  }
}
