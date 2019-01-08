// @flow
import React from 'react';
import {observer} from 'mobx-react';
import TextArea from './TextArea';

type Props = {
  alignment:string,
  category:string,
  data:Array<Object>,
  maptype:string,
  standardwidth:string,
  width:number,
}
type State = {}
@observer class TextAreas extends React.Component<Props, State> {
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
      <div className={`TextAreas ${standardwidth ? standardwidth : ""} ${alignment ? alignment : ""}`}>
        { rows }
      </div>
    );
  }
  _createInput = (field:Object, index:number) => {
    const {category, standardwidth} = this.props;
    return (
      <TextArea
        {...field}
        width={standardwidth}
        key={index}
        category={category}
        index={index}/>
    )
  }
}
TextAreas.defaultProps = {
  alignment:"",
  category:"",
  data:[],
  maptype:"",
  standardwidth:"",
  width:5,
}
export default TextAreas;