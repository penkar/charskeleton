import React from 'react';
import ValueAndModifiable from './ValueAndModifiable';
import {observer} from 'mobx-react';

type Props = {
  width:Number,
  alignment:String,
  data:String,
  category:String,
  standardwidth:String,
}

export default @observer class ValueAndModifiableRange extends React.Component<Props> {
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
      <div className={`ValueAndModifiableRange ${alignment}`}>
        { rows }
      </div>
    )
  }
  _createInput = (field:String, index:String) => {
    const {category, standardwidth} = this.props;
    return <ValueAndModifiable {...field} width={standardwidth} key={index} category={category} index={index}/>
  }
}
