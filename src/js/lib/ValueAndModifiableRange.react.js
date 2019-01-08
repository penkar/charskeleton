// @flow
import React from 'react';
import ValueAndModifiable from './ValueAndModifiable';
import {observer} from 'mobx-react';
import type {ContainerProps} from '../types.js';

@observer class ValueAndModifiableRange extends React.Component<ContainerProps> {
  render() {
    const {width, alignment, data} = this.props;
    const rows = [];
    for(let i = 0; i < data.length; i+= width) {
      rows.push(
        <div className={`container ${alignment}`} key={i}>
          { data.slice(i,i+ width).map((field, index:number) => this._createInput(field, index + i)) }
        </div>
      );
    }

    return (
      <div className={`ValueAndModifiableRange container ${alignment}`}>
        { rows }
      </div>
    )
  }
  _createInput = (field:String, index:String) => {
    const {category, styleWidth} = this.props;
    return <ValueAndModifiable {...field} width={styleWidth} key={index} category={category} index={index}/>
  }
}
ValueAndModifiableRange.defaulProps = {
  alignment:'row',
  category:'textareas',
  data:[],
  maptype:'',
  orientation:'horizontal',
  styleWidth:'fifth',
  width:5,
}
export default ValueAndModifiableRange