// @flow
import React from 'react';
import {observer} from 'mobx-react';
import Input from './Input';
import type {ContainerProps} from '../types.js';

@observer class InputFieldContainer extends React.Component<ContainerProps> {
  render() {
    const {width, alignment, data} = this.props;
    const rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`container ${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index) => this._createInput(field, index + i)) }
        </div>
      );
    }

    return (
      <div className={`InputFieldContainer container ${alignment}`}>
        { rows }
      </div>
    )
  }
  _createInput = (field:Object, index:number) => {
    const {category, styleWidth} = this.props;
    return <Input {...field} width={styleWidth} key={index} category={category} index={index}/>
  }
}
InputFieldContainer.defaultProps = {
  alignment:'row',
  category:'textareas',
  data:[],
  maptype:'',
  orientation:'horizontal',
  styleWidth:'fifth',
  width:5,
}

export default InputFieldContainer