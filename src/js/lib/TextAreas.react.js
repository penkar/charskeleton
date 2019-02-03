// @flow
import React from 'react';

import TextArea from './TextArea';
import type {ContainerProps} from '../types.js';

class TextAreas extends React.Component<ContainerProps> {
  render() {
    const {alignment, styleWidth, data, width} = this.props, rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index) => this._createInput(field, index + i)) }
        </div>
      );
    }
    return (
      <div className={`TextAreas container ${styleWidth} ${alignment}`}>
        { rows }
      </div>
    );
  }
  _createInput = (field:Object, index:number) => {
    const {category, styleWidth} = this.props;
    return (
      <TextArea
        category={category}
        index={index}
        key={index}
        width={styleWidth}
        {...field}
      />
    )
  }
}
TextAreas.defaultProps = {
  alignment:'row',
  category:'textareas',
  data:[],
  maptype:'',
  orientation:'horizontal',
  styleWidth:'fifth',
  width:5,
}
export default TextAreas;