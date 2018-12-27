import React from 'react';
import {observer} from 'mobx-react';
type Props = {
  classes:String,
}

export default @observer class VariableInputs extends React.Component<Props> {
  render() {
    return (
      <div className={`VariableInputs ${this.props.classes}`}>
      </div>
    )
  }
}
