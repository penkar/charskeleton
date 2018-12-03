import React from 'react';
import {observer} from 'mobx-react';
import KeyValue from './KeyValue';

export default @observer class KeyValues extends React.Component {
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
  _createInput = (field, index) => {
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
