// @flow
import React from 'react';
import {observer} from 'mobx-react';
import Fields from './index';

type Props = {
  category:String,
  classes:String,
  maptype:String,
  standardwidth:String,
  alignment:String,
  data:Array<Object>,
}

export default @observer class VariableInputsRange extends React.Component<Props,{}> {
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
