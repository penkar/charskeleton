// @flow
import React from 'react';

import Fields from './index';

type Props = {
  category:string,
  classes:string,
  maptype:string,
  styleWidth:string,
  alignment:string,
  data:Array<Object>,
}

export default class VariableInputsRange extends React.Component<Props,{}> {
  render() {
    const data = this.props.data;
    return (
      <div className={`VariableInputsRange ${this.props.classes}`}>
        { data.map((field) => {
          console.log(field)
          return React.createElement(Fields[data.field], data)
        } ) }
      </div>
    )
  }
}
