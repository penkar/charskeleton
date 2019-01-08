// @flow
import React from 'react';
import {observer} from 'mobx-react';
import KeyValue from './KeyValue';
import type {ContainerProps} from '../types.js';

@observer class KeyValues extends React.Component<ContainerProps> {
  render() {
    const {alignment, styleWidth, data, width} = this.props, rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`container ${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index) => this._createInput(field, index + i)) }
        </div>
      );
    }
    return (
      <div className={`KeyValues container ${styleWidth} ${alignment}`}>
        { rows }
      </div>
    );
  }
  _createInput = (field:Object, index:number) => {
    const {category, styleWidth} = this.props;
    return (
      <KeyValue
        {...field}
        width={styleWidth}
        key={index}
        category={category}
        index={index}/>
    )
  }
}
KeyValues.defaultProps = {
  alignment:'row',
  category:'textareas',
  data:[],
  maptype:'',
  orientation:'horizontal',
  styleWidth:'fifth',
  width:5,
}
export default KeyValues;