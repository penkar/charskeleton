// @flow
import React from 'react';
import {observer} from 'mobx-react';
import KeyValue from './KeyValue';
type Props = {
  alignment:string,
  category:string,
  data:Array<Object>,
  width:string,
  standardwidth:string,
  value:number,
}

@observer class KeyValues extends React.Component<Props> {
  render() {
    const {alignment, standardwidth, data, width} = this.props, rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`container ${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index) => this._createInput(field, index + i)) }
        </div>
      );
    }
    return (
      <div className={`KeyValues ${standardwidth ? standardwidth : ""} ${alignment ? alignment : ""}`}>
        { rows }
      </div>
    );
  }
  _createInput = (field:Object, index:number) => {
    const {category, standardwidth} = this.props;
    return (
      <KeyValue
        {...field}
        width={standardwidth}
        key={index}
        category={category}
        index={index}/>
    )
  }
}
KeyValues.defaultProps = {
  category:'',
  fieldtype:"text",
  title:"",
  classes:"",
  value:0,
  id:"keyavlues",
}
export default KeyValues;