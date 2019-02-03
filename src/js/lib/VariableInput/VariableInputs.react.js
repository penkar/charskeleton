// @flow
import React from 'react';

type Props = {
  classes:String,
}

export default class VariableInputs extends React.Component<Props> {
  render() {
    return (
      <div className={`VariableInputs ${this.props.classes}`}>
      </div>
    )
  }
}
